module.exports = {


  friendlyName: 'View log page',


  description: 'Display the dashboard "Log" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/log',
      description: 'Display the log page for authenticated users.'
    },

  },


  fn: async function () {

    return {};

  }


};
