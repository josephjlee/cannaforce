module.exports = {


  friendlyName: 'View medical',


  description: 'Display "Medical" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/verify/medical'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
