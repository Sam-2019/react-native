import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import CryptoItem from "./crypto-item";
import axios from "axios";
import { Loader } from "./styles";

// function Content() {
//     return (
//         <View>
//             <FlatList
//                 data={[
//                     { key: '1', name: 'Bitcoin', symbol: 'BTC', price_usd: '16735.96' },
//                     { key: '2', name: 'Bitcoin Cash', symbol: 'BT Cash', price_usd: ' 506.64' },
//                     { key: '3', name: 'Etherium', symbol: 'ETH', price_usd: '0.521819' },
//                     { key: '4', name: 'Ripple', symbol: 'XRP', price_usd: '1.00' },
//                     { key: '5', name: 'DogeCoin', symbol: 'DC', price_usd: '2.0' },
//                 ]}
//                 renderItem={({ item }) => <CryptoItem  {...item} />}
//             />
//         </View>
//     );
// }

function Content() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    let didCancel = false;

    async function getUser() {
      try {
        const response = await axios({
          method: "post",
          url: "https://api.coinlore.net/api/tickers/",
        });

        if (!didCancel) {
          console.log(response.data);
          setLoading(false);
          setData(response.data.data);
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
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => <CryptoItem {...item} />}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({});

export default Content;
