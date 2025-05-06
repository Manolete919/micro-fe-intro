import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./PDPContent";
import { getProductById, currency } from "home/products";
import "remixicon/fonts/remixicon.css";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header name="HEADER" />
    <Router>
       <Routes>
        <Route path="/product/:id" element={<PDPContent />} />
       </Routes>
    </Router>
   
     
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);