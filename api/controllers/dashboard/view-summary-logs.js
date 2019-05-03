module.exports = {


  friendlyName: 'View summary of logs page',


  description: 'Display the dashboard "Logs summary" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/logs',
      description: 'Display the Logs summary for authenticated users.'
    },

  },


  fn: async function () {

    return {};

  }


};
