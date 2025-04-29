import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Header from "./Header";
import Footer from "./Footer";



const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header name="Cabecera"/>
    <div>Name: home</div>
    <div>Framework: react-18</div>
    <Footer />
   </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App/>);