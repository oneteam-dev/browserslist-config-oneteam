module.exports = ['', 'desktop', 'mobile', 'electron'].map(name => ({
  name, list: require(`../../${name}`)
}))
