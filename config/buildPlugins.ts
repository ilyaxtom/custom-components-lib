import { Configuration } from 'webpack';
import {BuildOptions} from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins({paths, mode}: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: paths.html}),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    return plugins;
}