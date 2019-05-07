module.exports = {


  friendlyName: 'View profile',


  description: 'Display "Profile" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/validate/profile'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
