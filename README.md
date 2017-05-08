# minecraft-items

> Get [Minecraft](https://minecraft.net) [items](http://minecraft-ids.grahamedgecombe.com/) by id, type, or name.

[![Build Status](https://travis-ci.org/pandapaul/minecraft-items.svg?branch=master)](https://travis-ci.org/pandapaul/minecraft-items)


## Install

```
$ npm install --save minecraft-items
```


## Usage

```js
const minecraftItems = require('minecraft-items')

const diamond = minecraftItems.get(264)
const mooshroomSpawnEgg = minecraftItems.get('383:96')
const grass = minecraftItems.get('grass')
```


## API

### get( id | type | name )

Returns data about the matching item.  For example, here's a Jungle Boat
```js
{
  id: '446:0',
  name: 'Jungle Boat',
  meta: 0,
  type: 446
}
```

#### id

Type: `string`

Uniquely identifies an item by including both type and meta. Formatted as `type:meta`.

#### type

Type: `number`

Primary numeric identifier for an item. If provided to `get()`, the item's data will be retrieved by assuming that `meta` is zero.

#### name

Type: `string`

For case insensitive (but otherwise exact) name match. i.e. `get('diamond')` is equivalent to `get('DIAMOND')` but not `get('diamo')`.

#### meta

Type: `number`

Describes a subtype of Minecraft item. Though many items do not have meta values (`meta: 0`), lots of items do use the meta value to describe themselves as variants on a theme.  For example, Dirt is item 3 while Coarse Dirt is item 3:1.


## Special Thanks

This package is built from data provided by http://minecraft-ids.grahamedgecombe.com/, so thanks Graham. :)


## License

MIT
