# [slush](https://github.com/slushjs/slush)-ng-app [![Build Status](https://secure.travis-ci.org/jonkemp/slush-ng-app.png?branch=master)](https://travis-ci.org/jonkemp/slush-ng-app)

> Generator for AngularJS web apps using [angular-seed](https://github.com/angular/angular-seed) and Gulp


## Getting Started

Install `slush-ng-app` globally:

```bash
$ npm install -g slush-ng-app
```

### Usage

Create a new folder for your project:

```bash
$ mkdir my-slush-ng-app
```

Run the generator from within the new folder:

```bash
$ cd my-slush-ng-app && slush ng-app
```

Once you run the generator, you will not need to run `npm install` or `bower install` as that is done automatically by the generator.

In addition, you can now use Gulp to preview your app by running `gulp serve`, instead of `npm start`. To see what else you can do with Gulp, check out the [gulpfile.js](https://github.com/jonkemp/slush-ng-app/blob/master/templates/gulpfile.js).

See the [angular-seed](https://github.com/angular/angular-seed) docs for more information.

## Options

- `--skip-install`
  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.

## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding. To find out more about Slush, check out the [documentation](https://github.com/slushjs/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/jonkemp/slush-ng-app/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/jonkemp/slush-ng-app/issues).

## License 

The MIT License

Copyright (c) 2014, Jonathan Kemp

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

