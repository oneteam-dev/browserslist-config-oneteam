const browserslist = require('browserslist')

const print = (preset, browsers) => {
  console.log(
    `"extends browserlist-config-oneteam${
      preset ? '/' + preset : ''
    }"\n\n${
      browserslist(browsers).join('\n')
    }\n\nhttp://browserl.ist/?q=${
      encodeURIComponent(browsers.join(', '))
    }\n\n`
  )
}

module.exports = print
