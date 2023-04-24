import path from "path";
import { BuildOptions } from "./build/types/config";
import webpack from "webpack";
import buildPlugin from "./build/buildPlugin";
import buildLoaders from "./build/buildLoders";
import buildResolvers from "./build/builResolvers";
import { builDevServer } from "./build/buildDevServer";

export default function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode , isDev} = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugin(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool:  isDev? "inline-source-map": undefined,
    devServer: isDev? builDevServer(options): undefined,
  };
}
