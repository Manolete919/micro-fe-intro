import React from "react";
 
//import MiniCart from "cart/MiniCart";
//import Login from "cart/Login";
//import "./index.css";


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
    <div  className="p-5 bg-blue-500 text-white text-3xl font-bold">
       Caberera {app.name}

    </div>
  );
}