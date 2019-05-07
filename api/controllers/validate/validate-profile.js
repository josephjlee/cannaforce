module.exports = {


  friendlyName: 'Validate profile',


  description: 'Validate "Profile" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/validate/validate-profile'
    }

  },


  fn: async function () {

    // Respond with view.
    return {
      stripePublishableKey: sails.config.custom.enableBillingFeatures? sails.config.custom.stripePublishableKey : undefined,
    };

  }


};
