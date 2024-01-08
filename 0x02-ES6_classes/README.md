0x02. ES6 classes
=================


![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/817248fb77fb5c2cef3f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240108%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240108T151835Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3c2e7f0449daa6b379cc0aaa8010c333e822a11c9a932a544abd9801be8422f9)


Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.alxswe.com/rltoken/HZvBl09eHoGwvN8jqlYO-g "explain to anyone"), **without the help of Google**:

-   How to define a Class
-   How to add methods to a class
-   Why and how to add a static method to a class
-   How to extend a class from another
-   Metaprogramming and symbols

Requirements
------------

-   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
-   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
-   All your files should end with a new line
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `js` extension
-   Your code will be tested using `Jest` and the command `npm run test`
-   Your code will be verified against lint using ESLint
-   Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`

Setup
-----

### Install NodeJS 12.11.x

(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

```

```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3

```

### Install Jest, Babel, and ESLint

in your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install`.

Configuration files
-------------------

Add the files below to your project directory

### `package.json`

Click to show/hide file contents

### `babel.config.js`

Click to show/hide file contents

```

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

```

### `.eslintrc.js`

Click to show/hide file contents

```

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

```

### and...

Don't forget to run `$ npm install` when you have the `package.json`