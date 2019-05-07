module.exports = {


  friendlyName: 'View dashboard',


  description: 'Display "Dashboard" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/dashboard-profile'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
