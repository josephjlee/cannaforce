module.exports = {


  friendlyName: 'View medical',


  description: 'Display "Medical" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/validate/medical'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
