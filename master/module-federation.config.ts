export const mfConfig = {
  name: "home",
  exposes: {
    "./Header": "./src/Header.tsx",
    "./Footer": "./src/Footer.tsx",
    "./products": "./src/products.ts"
  },
  remotes: {
    //home: "home@http://localhost:5000/mf-manifest.json",
    pdp: "pdp@http://localhost:4000/mf-manifest.json",
    cart: "cart@http://localhost:3002/mf-manifest.json"

  },
  shared: ["react", "react-dom"],
};
