const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://nfs.faireconomy.media/ff_calendar_thisweek.json', // Target URL
        changeOrigin: true,
        pathRewrite: { '^/api': '' }, // Removes '/api' prefix
      },
    },
  },
})
