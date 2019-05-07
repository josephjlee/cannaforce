module.exports = {


  friendlyName: 'View user',


  description: 'Display "User" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/user'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
