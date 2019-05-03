module.exports = {


  friendlyName: 'View admin overview',


  description: 'Display "admin Overview" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/admin/admin-overview',
    }

  },


  fn: async function () {

    // If billing features are enabled, include our configured Stripe.js
    // public key in the view locals.  Otherwise, leave it as undefined.
    return {
      stripePublishableKey: sails.config.custom.enableBillingFeatures? sails.config.custom.stripePublishableKey : undefined,
    };

  }


};
