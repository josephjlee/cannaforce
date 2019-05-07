module.exports = {


  friendlyName: 'View settings',


  description: 'Display "Settings" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/settings'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
