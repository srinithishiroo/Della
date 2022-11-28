import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "./components/header";
import Hero from "./components/hero";
import Caro from "./components/hero/mulity";
import Slides from "./components/simple/slide";
import Mem from "./member/membership";
import Photos from "./components/gridimg/img";
import Global from "./components/social impact/global";
import Glo from "./components/second/glo";
import Event from "./components/dlcEvents/events";
import Upcoming from "./components/upcome/up";
import Hybrid from "./components/hybrid event/hybrid";
const App = () => {
  return (
    <>
      <Head />
      <Hero />
      <Slides />
      <Caro />
      <Mem />
      <Photos />
      <Event />
      <Hybrid />
      <Upcoming />
      <Global />
      <Glo />
    </>
  );
};
export default App;
