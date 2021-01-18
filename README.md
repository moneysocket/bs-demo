Moneysocket Extension Buyer and Seller Demo App
-----

This is an example of defining an extension to the [js-moneysocket](https://github.com/moneysocket/js-moneysocket) library and protocol for a specific custom purpose.


TODO - screenshot

A build of buyer and seller app is hosted at project homepage:
[buyer](https://socket.money/bs-demo/buyer)
[seller](https://socket.money/bs-demo/seller)


The Gist Of It
------------------------------------------------------------------------

The classes here extend the base classes out of the library and place one layer on the stack objects that aren't in the generic stack classes.

Custom messages are defined for the purposes of the exchange between the Buyer and the Seller. This allows the Seller to advertize what is for sale over the socket connection and the Buyer to consumer it.

The application driving the economic interaction is the Buyer, which has two Consumer connections. One connection has the extension, one is the generic ConsumerStack. This allows the Buyer to orchestrate the act of buying.

The Seller appliction provides a Provider connection to the Buyer that has the extension. For the Seller to recieve the payment for the purchase it has a Consumer connection back to the Seller's funds.


Dependencies
------------------------------------------------------------------------

This depends on [js-moneysocket](https://github.com/moneysocket/js-moneysocket) which will need to be installed into `node_modules` prior to building this project.

`$ git clone https://github.com/moneysocket/bs-demo`

`$ cd bs-demo`

`$ npm install https://github.com/moneysocket/js-moneysocket`

Also, [package.json](package.json) specifies additional dependencies that will need to be installed. From the cloned directory:

`$ npm install`

Building
------------------------------------------------------------------------

This uses `gulp` to build the application.

From the cloned directory with the dependencies installed:

`$ gulp quick` will build to the `htdocs/` directory

`$ gulp full` will take longer but will produce optimized javascript

`$ gulp quick_watch` will watch the source files for changes and automatically rebuild


Running
------------------------------------------------------------------------

Once, built the web root will be set up under `htdocs/`. If you want to run it locally, use a webserver. eg:

`$ cd htdocs`
`$ python -m SimpleHTTPServer 1234`

and point your browser at the port. eg:

`$ firefox http://localhost:1234`

Project Links
------------------------------------------------------------------------

- [Homepage](https://socket.money).
- [Twitter](https://twitter.com/moneysocket)
- [Telegram](https://t.me/moneysocket)
- [Donate](https://socket.money/#donate)
