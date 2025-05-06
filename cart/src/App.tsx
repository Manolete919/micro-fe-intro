import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
//import Header from "home/Header";
//import Footer from "home/Footer";
import CartContent from "./CartContent";
import "remixicon/fonts/remixicon.css";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
     
    <div className="my-10">
      <CartContent />
     </div>
     
   </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);