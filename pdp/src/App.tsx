import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
//import Header from "home/Header";
const Header = React.lazy(() => import("home/Header"));
import Footer from "home/Footer";

const App = () => {

  const [showHeader, setShowHeader] = useState(false);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      {showHeader && <Suspense fallback={<div>Loading</div>}>
        <Header />
      </Suspense>}
      <button
      onClick={() => setShowHeader(true)}
      >Show the header</button>
      
      <div>Name: pdp</div>
      <div>Framework: react-18</div>
      <Footer />
    </div>
  );
  
}


const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);