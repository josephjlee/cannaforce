module.exports = {


  friendlyName: 'View email link',


  description: 'Display "Email link" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/verify/email-link'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
