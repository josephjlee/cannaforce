module.exports = {


  friendlyName: 'View reception page',


  description: 'Display the dashboard "Reception" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/reception',
      description: 'Display the reception page for authenticated users.'
    },

  },


  fn: async function () {

    return {};

  }


};
