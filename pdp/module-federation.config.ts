export const mfConfig = {
  name: "pdp",
  remotes: {
    home: "home@http://localhost:5000/mf-manifest.json",
    //pdp: "pdp@http://localhost:4000/mf-manifest.json",
    //cart: "cart@http://localhost:3002/mf-manifest.json"
  },
  exposes: {
    "./PDPContent": "./src/PDPContent.tsx",
  },
  shared: ["react", "react-dom"],
};
