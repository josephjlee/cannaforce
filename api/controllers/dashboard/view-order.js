module.exports = {


  friendlyName: 'View order',


  description: 'Display "Order" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/order'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
