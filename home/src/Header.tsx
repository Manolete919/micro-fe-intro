import React from "react";
import { Link } from "react-router-dom";

//import MiniCart from "cart/MiniCart";
//import Login from "cart/Login";

import "./index.css";
interface AppConfig {
  name: string;
}


export default function Header(app: AppConfig) {
  const style = {
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '5px',
  };
  return (
    <div style={style} className="p-5 bg-blue-500 text-white text-3xl font-bold">
       Caberera {app.name}

    </div>
  );
}