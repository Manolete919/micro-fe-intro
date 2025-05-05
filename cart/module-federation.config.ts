export const mfConfig = {
  name: "cart",
  remotes: {
    home: "home@http://localhost:5000/mf-manifest.json",
    pdp: "pdp@http://localhost:4000/mf-manifest.json",
    cart: "cart@http://localhost:3002/mf-manifest.json"

  },
  shared: ["react", "react-dom"],
};
