module.exports = {


  friendlyName: 'View log',


  description: 'Display "Log" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/log'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
