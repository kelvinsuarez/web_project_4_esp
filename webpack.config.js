const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // plugin de conexión
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports= {
    devtool: 'inline-source-map',
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/[name].js',
        publicPath: "",
        assetModuleFilename: 'images/[name][ext][query]'
    },
    target: ['web', 'es5'],
    stats: { children: true },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        compress: true, // esto acelerará la carga de archivos en el modo de desarrollo
        port: 8080, // abrirá tu página en localhost:8080 (puedes usar otro puerto)
        open: true,// se abrirá automáticamente en el navegador después de ejecutar npm run dev
    },
    module: {
        rules: [ // esto es un array de reglas
          // añádele un objeto que contenga reglas para Babel
          {
            // una expresión regular que busca todos los archivos js
            test: /\.js$/,
            // todos los archivos deben ser procesados por babel-loader
            loader: "babel-loader",
            // excluye la carpeta node_modules, no necesitamos procesar archivos en ella
            exclude: "/node_modules/"
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: { importLoaders: 1 }
              },
              "postcss-loader"
            ],
          },
          {
            // la regla para procesar archivos
            test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
            type: "asset/resource"
          },
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          inject: true,
          template: "./src/index.html",
          filename: `index.html`,
          chunks: ['app']
          }
        ),
          new CleanWebpackPlugin(),
          new MiniCssExtractPlugin() // conecta el plugin para fusionar archivos CSS
      ],
}