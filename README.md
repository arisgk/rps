# RPS
[Rock Paper Scissors](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors#Additional_weapons) extended version built using a Web3 web application and Ethereum smart contracts.

## Development
RPS uses [truffle](http://truffleframework.com/) development framework and [Truffle React Box](https://truffle-box.github.io/).

To start the app in development mode using Ethereum [testrpc](https://github.com/ethereumjs/testrpc) client, navigate to project root and run:

```
npm install
testrpc
truffle compile
truffle migrate
npm run start
```

## Production
Before deploying the app run `npm run build` to generate a production build.

Start the Node.js server using `npm run serve`.
