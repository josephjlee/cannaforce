module.exports = {


  friendlyName: 'View email',


  description: 'Display "Email" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/verify/email'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
