module.exports = {


  friendlyName: 'View identity',


  description: 'Display "Identity" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/verify/identity'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
