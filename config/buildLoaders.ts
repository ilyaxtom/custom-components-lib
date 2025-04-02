import {ModuleOptions} from 'webpack';
import {buildBabelLoader} from './babel/buildBabelLoader';
import {BuildOptions} from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const babelLoader = buildBabelLoader(options);

    return [
        babelLoader,
    ]
}