const path = require('path')

const webpack = require('webpack')
const { createFsFromVolume, Volume } = require('memfs')

module.exports = (fixture, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./fixtures/${fixture}?info`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          resourceQuery: /info/,
          use: {
            loader: path.resolve(__dirname, '../index.js'),
            options
          }
        }
      ]
    }
  })

  compiler.outputFileSystem = createFsFromVolume(new Volume())
  // https://github.com/webpack/webpack/pull/10378#discussion_r378413004
  compiler.outputFileSystem.join = path.join.bind(path)

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err)
      }

      if (stats.hasErrors()) {
        return reject(new Error(stats.toJson().errors))
      }

      resolve(stats)
    })
  })
}
