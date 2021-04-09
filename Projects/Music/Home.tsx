import React from "react";
import { View } from "react-native";
import Loading from "./LoadingPage";
import Layout from "./Layout";


const Home = () => {
  const [appLoad, setAppLoad] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAppLoad(false);
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <View >
      {/* {appLoad ? <Loading /> : <Layout />} */}

      <Layout />
    </View>
  );
};
export default Home;
