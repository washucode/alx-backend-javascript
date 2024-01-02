0x00. ES6 Basics
================

JavaScriptES6

-   By: Johann Kerbrat, Engineering Manager at Uber Works
-   Weight: 1
-   Project will start Jan 2, 2024 6:00 AM, must end by Jan 4, 2024 6:00 AM
-   Checker was released at Jan 2, 2024 6:00 PM
-   An auto review will be launched at the deadline

### Concepts

*For this project, we expect you to look at these concepts:*

-   [Modern Javascript](https://intranet.alxswe.com/concepts/541)
-   [Software Linter](https://intranet.alxswe.com/concepts/542)

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240102%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240102T203428Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=47873755b2b3dfb6702841c4f46435ffc7451b4d80d1849568f24d70d71eacd9)

Resources
---------

**Read or watch**:

-   [ECMAScript 6 - ECMAScript 2015](https://intranet.alxswe.com/rltoken/NW1dFLFExQ12_hD8yvkV3A "ECMAScript 6 - ECMAScript 2015")
-   [Statements and declarations](https://intranet.alxswe.com/rltoken/sroRUsUvOZV28V99MHDenw "Statements and declarations")
-   [Arrow functions](https://intranet.alxswe.com/rltoken/N2WLylppCtkkX3YFFtyUHw "Arrow functions")
-   [Default parameters](https://intranet.alxswe.com/rltoken/kbw9gMO6sdeOKAY23SYVgA "Default parameters")
-   [Rest parameter](https://intranet.alxswe.com/rltoken/erZfCvacuGVk9z1CQlJvYQ "Rest parameter")
-   [Javascript ES6 --- Iterables and Iterators](https://intranet.alxswe.com/rltoken/JAB5Y0TOU8d9JvmJEi9tiQ "Javascript ES6 --- Iterables and Iterators")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.alxswe.com/rltoken/KDGvEqVWIsvOQfCcwDNHNg "explain to anyone"), **without the help of Google**:

-   What ES6 is
-   New features introduced in ES6
-   The difference between a constant and a variable
-   Block-scoped variables
-   Arrow functions and function parameters default to them
-   Rest and spread function parameters
-   String templating in ES6
-   Object creation and their properties in ES6
-   Iterators and for-of loops

Requirements
------------

### General

-   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
-   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
-   All your files should end with a new line
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `js` extension
-   Your code will be tested using the [Jest Testing Framework](https://intranet.alxswe.com/rltoken/ECZpKsJ3fm1qRA7lDyhd_Q "Jest Testing Framework")
-   Your code will be analyzed using the linter [ESLint](https://intranet.alxswe.com/rltoken/Ttd9w5jERwTErJW3DDbVoQ "ESLint") along with specific rules that we'll provide
-   All of your functions must be exported

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

Click here to show/hide file contents

### `babel.config.js`

Click here to show/hide file contents

### `.eslintrc.js`

Click here to show/hide file contents

### Finally...

Don't forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.