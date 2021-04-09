import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import axios from "axios";
import { CryptoInfoProps } from "./types";
import { Loader } from "./styles";

function CryptoInfo({ route }: CryptoInfoProps) {
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
    <>
      {isLoading ? (
        <View style={Loader.style}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.page}>
          <Text>{data.blog_url}</Text>

          <View style={styles.logowrapper}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: data.logo_url,
              }}
            />
          </View>

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
    </>
  );
}

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
  logowrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  tinyLogo: {
    width: 100,
    height: 100,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 15,
    overflow: "hidden",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
