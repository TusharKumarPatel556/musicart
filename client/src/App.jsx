import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import styles from "./App.module.css";
import SignupPage from "./Pages/SignupPage/SignupPage";
import HomePage from "./Pages/HomePage/HomePage";
import ProductDescription from "./Pages/ProductDescriptionPage/ProductDescription";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/productdetails" element={<ProductDescription />}>
          <Route path="/productdetails/:ProductName" element={<LoginPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
