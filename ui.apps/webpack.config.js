const { VueLoaderPlugin } = require("vue-loader");

const CLIENTLIB_ROOT = "./src/main/content/jcr_root/apps/pb/clientlibs";

const CLIENTLIB_NAME = "clientlib-site";

module.exports = {
  entry: { bundle: `./${CLIENTLIB_ROOT}/${CLIENTLIB_NAME}/webpack-entry.js` },

  output: {
    path: `${__dirname}/${CLIENTLIB_ROOT}/${CLIENTLIB_NAME}/dist`,

    filename: "./[name].js",
  },

  module: {
    rules: [
      {
        test: /\.vue$/,

        loader: "vue-loader",
      },
    ],
  },

  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },

    extensions: [".js", ".vue", ".json"],
  },

  plugins: [new VueLoaderPlugin()],
};
