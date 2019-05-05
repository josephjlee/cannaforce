module.exports = {


  friendlyName: 'View verify',


  description: 'Display "Verify" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/verify'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
