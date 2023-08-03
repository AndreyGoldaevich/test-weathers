const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
    transpileDependencies: true,
    css: { extract: false },
    configureWebpack: {
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js'
        }
    }
})
