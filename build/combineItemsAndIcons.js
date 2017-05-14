
module.exports = ([items, icons]) => {
  return items.map(item => Object.assign(item, { icon: icons[item.id] }))
}
