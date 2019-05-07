module.exports = {


  friendlyName: 'View identity',


  description: 'Display "Identity" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/validate/identity'
    }

  },


  fn: async function () {

    // Respond with view.
    return {
      stripePublishableKey: sails.config.custom.enableBillingFeatures? sails.config.custom.stripePublishableKey : undefined,
    };

  }


};
