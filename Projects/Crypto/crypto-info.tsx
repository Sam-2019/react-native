import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import axios from "axios";

interface Props {
  route?: any;
  blog_url?: any;
  logo_url?: any;
  whitepaper_url?: any;
  website_url?: any;
  facebook_url?: any;
}

const CryptoInfo: React.FC<Props> = ({ route }) => {
  // console.log(route.params.id);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  let id = route.params.id;
  //console.log(id);

  let apiKey = "cde88af40325c539a431f18dd5bca42e";
  let nomics = `https://api.nomics.com/v1/currencies?key=${apiKey}`;
  let ids;

  useEffect(() => {
    let didCancel = false;

    async function getUser() {
      try {
        const response = await axios({
          method: "get",
          url: `${nomics}&ids=${id}&attributes=id,name,logo_url,blog_url,telegram_url,whitepaper_url`,
        });

        if (!didCancel) {
        //  console.log(response.data);
          setLoading(false);
          setData(response.data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getUser();

    return () => {
      didCancel = true;
    };
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.page}>
          <Text>{data.blog_url}</Text>

          <Image
            style={styles.tinyLogo}
            source={{
              uri: data.logo_url,
            }}
          />

          <View style={styles.item}>
            <Text>{data.whitepaper_url}</Text>
          </View>

          <View style={styles.item}>
            <Text>{data.website_url}</Text>
          </View>

          <View style={styles.item}>
            <Text>{data.facebook_url}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default CryptoInfo;

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",


  },
  item: {

    alignItems: "center",

  },
  logo: {},
  name: {},

  tinyLogo: {
    width: 50,
    height: 50,
  },
});
