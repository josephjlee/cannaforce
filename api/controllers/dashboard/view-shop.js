module.exports = {


  friendlyName: 'View shop',


  description: 'Display "Shop" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/shop'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
