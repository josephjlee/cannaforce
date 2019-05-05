# CannaForce

a [Sails v1](https://sailsjs.com) application


### About Us

+ [Cannaforce Homepage](https://cannaforce.com/get-started)
+ [Cannaforce Facebook](https://facebook.com/cannaforce)
+ [Cannaforce GitHub](https://github.com/cannaforce)
+ [Cannaforce Slack](https://cannaforce.slack.com)
+ [Cannaforce Twitter](https://twitter.com/cannaforce)

### About Sails

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)

## Setup Cannaforce

To get started using CannaForce:

  - Launch terminal or command prompt
  - Clone the repository using `git clone https://github.com/cannaforce/cannaforce.git`
  - Change directories using `cd cannaforce`
  - Install node packages via `npm i`
  - Launch SailsJS via `sails lift` or via `npx nodemon app.js`

# Customize Cannaforce

After your application is up & running, you'll want to login using the default account:

  - username: `sales@cannaforce.com`
  - password: `changeme`

# Top Configurations

Enable MailGun Authentication
  - Login as an Admin user
  - Click "Global Settings" 
  - Under MailConfig, Enter API Key & Secret
  - Click "Test Mail Setup"
  - After Mail Setup succeeds, you will be allowed to enable Mail Verification
Enable Stripe Shopping Cart
  - Login as an Admin user
  - Click "Global Settings" 
  - Under StripeConfig, Enter API Key & Secret
  - Click "Test Stripe Setup"
  - After Strip Setup succeds, you will be allowed to enable Shopping Cart

### Version info

This app was originally generated on Sat Apr 20 2019 12:58:26 GMT-0700 (Pacific Daylight Time) using Sails v1.1.0.

<!-- Internally, Sails used [`sails-generate@1.16.5`](https://github.com/balderdashy/sails-generate/tree/v1.16.5/lib/core-generators/new). -->


This project's boilerplate is based on an expanded seed app provided by the [Sails core team](https://sailsjs.com/about) to make it easier for you to build on top of ready-made features like authentication, enrollment, email verification, and billing.  For more information, [drop us a line](https://sailsjs.com/support).


<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

