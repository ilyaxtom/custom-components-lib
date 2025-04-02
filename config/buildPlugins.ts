import { Configuration } from 'webpack';
import {BuildOptions} from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";

export function buildPlugins({paths}: BuildOptions): Configuration['plugins'] {
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: paths.html})
    ];

    return plugins;
}