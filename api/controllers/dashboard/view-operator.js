module.exports = {


  friendlyName: 'View operator',


  description: 'Display "Operator" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/operator'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
