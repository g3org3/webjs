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

### Features &nbsp;
Call any service from any controller!
```javascript
// No need to require your service! :O
var fn = require('../services/myService.js'); // [ X ]
fn.findInArray(users, "id", 1);

// Simply use them in your controllers by the service name B|
myService.findInArray(users, "id", 1); // [ √ ]

```

### Routes &nbsp;
```javascript
/*
 * Routes Config
 */
module.exports {
  // Examples
  '/': 'SampleController.getInfo',
  'POST /user': 'UserController.create',
  // you may also render a view like this
  '/home': 'home'
}
```

### Controllers &nbsp;
```javascript
/*
 * SampleController
 */
module.exports {
  //action
  getInfo: function(req, res){
    SampleService.findInArray(req.param.users, "id", "72A4FC83EF812BA1");
    res.send("ready");
  },
  main: function(req, res){
    res.render("home");
  }
}
```
### Services &nbsp;
```javascript
/*
 * SampleService
 */
module.exports {
  //action
  findInArray: function(array, key, value){
    ...
  }
}
```
