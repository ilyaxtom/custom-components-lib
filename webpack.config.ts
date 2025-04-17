// @ts-ignore
import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
    mode: 'production',
    // @ts-ignore
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        // @ts-ignore
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: {
            name: 'CustomComponentsLib',
            type: 'umd',
        },
        globalObject: 'this',
        clean: true,
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            // @ts-ignore
            '@': path.resolve(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.module\.scss$/,
                use: [
                    'style-loader', // Inject styles into the DOM via JS
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]__[hash:base64:5]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: [
                    'style-loader', // Inject styles into the DOM via JS
                    'css-loader', // Load and bundle CSS
                    'sass-loader', // Compile SCSS to CSS
                ],
            },
        ],
    },
    plugins: [],
};

export default config;
