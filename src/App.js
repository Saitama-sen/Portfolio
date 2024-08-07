import React, { useEffect, useState } from "react";
import "./index.css";
import TopNavbar from "./components/TopNavbar";
import Title from "./components/Title";
import MyWorks from "./components/MyWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <TopNavbar />
      <Title />
      <MyWorks />
      <Footer />
    </>
  );
}

export default App;
