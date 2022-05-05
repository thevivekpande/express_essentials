[Documentation](http://expressjs.com/en/starter/installing.html)

**babel dependecies installation**

npm i -g --save-dev @babel/preset-env @babel/nodel/core @babel/cli @babel/preset-env @babel/node

**Script to add**

"start":"nodemon --experimental-json-modules --exec babel-node index.js",

**.babelrc file**

{
"presets" : ["@babel/preset-env"]
}

**import mock.json**

import data from "./data/mock.json" assert {type: "json"};

**DEBUG CMD**

set DEBUG=express:\* & node --experimental-json-modules index.js

If this command is giving error try following:

$env:DEBUG='express:\*'; node --experimental-json-modules index.js
$env:DEBUG='express:\*'; node --experimental-json-modules index.js

**Run DEBUG on Command prompt**

    "debug":"set DEBUG=express:* & nodemon --experimental-json-modules --exec babel-node index.js",
