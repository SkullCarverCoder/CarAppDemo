<p align="center">
<h1 align="center"> 👨‍💻🚘CarAppDemo </h1>
</p>
<p align="center">
  • <a href="https://google.com">Check on Snack</a> • <a href="mailto:juanlh182@gmail.com">Contact</a>
<br><br>
</p>
A car rental app demo on react native

## Running locally
CarAppDemo is built on React Native + Expo and therefore assumes you have [node](https://nodejs.org/en/) installed, [nvm](https://github.com/nvm-sh/nvm) is recommended as is easy to install out of the box running the latest LTS version.
```sh
# clone the project and cd into it
git clone git@github.com:SkullCarverCoder/CarAppDemo.git && cd ./CarAppDemo
# install dependencies
# replace 'npm' with 'yarn' if preferred
npm install
# start on web
npm run web
```

## Troubleshooting

if running the web server fails with the following code
```sh
...
library: 'digital envelope routines',
reason: 'unsupported',
code: 'ERR_OSSL_EVP_UNSUPPORTED'
```
set this
```sh
export NODE_OPTIONS=--openssl-legacy-provider
```
and run again
```sh
npm run web
```