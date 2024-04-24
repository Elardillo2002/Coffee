import CompressionPlugin from "compression-webpack-plugin";
import BrotliPlugin from "brotli-webpack-plugin";

export default {
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip",
    }),
    new BrotliPlugin(),
  ],
};