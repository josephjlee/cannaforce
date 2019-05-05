module.exports = {


  friendlyName: 'View email',


  description: 'Display "Email" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/validate/email'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
