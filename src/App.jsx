import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Features from "./components/Features";
import DownloadExtension from "./components/DownloadExtension";
import FAQs from "./components/FAQs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Features />
      <DownloadExtension />
      <FAQs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
