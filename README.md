# webjs [![version](http://g3org3.github.io/webjs/version.svg)]()
A tiny web framework on top of expressjs

### Installation &nbsp;
```sh
# Clone the repo
$ git clone https://github.com/g3org3/webjs.git MyApp
```

```sh
# Install dependencies
$ cd MyApp && npm install
```

```sh
# Start
$ npm start
```
### Routes &nbsp;
```javascript
/*
 * Routes Config
 */
module.exports {
  // Examples
  '/': 'MainController.getInfo',
  'POST /user': 'UserController.create'
}
```
