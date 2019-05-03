module.exports = {


  friendlyName: 'View users',


  description: 'Display "Users" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/view-users'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
