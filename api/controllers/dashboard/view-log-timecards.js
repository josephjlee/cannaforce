module.exports = {


  friendlyName: 'View portal page',


  description: 'Display the dashboard "Portal" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/portal',
      description: 'Display the portal page for authenticated users.'
    },

  },


  fn: async function () {

    return {};

  }


};
