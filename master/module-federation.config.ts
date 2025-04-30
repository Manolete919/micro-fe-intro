export const mfConfig = {
  name: "home",
  exposes: {
    "./Header": "./src/Header.tsx",
    "./Footer": "./src/Footer.tsx",
    "./products": "./src/products.ts"
  },
  shared: ["react", "react-dom"],
};
