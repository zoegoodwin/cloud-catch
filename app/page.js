import React from "react";
import MainLayout from "./components/main-layout";
import Search from "./components/search";
import Tabs from "./components/tabs";

/* @client */
const Home = () => {
  return (
    <MainLayout>
      {/* <Search /> */}
      <Tabs />
    </MainLayout>
  );
};

export default Home;
