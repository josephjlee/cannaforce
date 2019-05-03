module.exports = {


  friendlyName: 'View event page',


  description: 'Display the dashboard "Event" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/event',
      description: 'Display the event page for authenticated users.'
    },

  },


  fn: async function () {

    return {};

  }


};
