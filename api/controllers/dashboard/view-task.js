module.exports = {


  friendlyName: 'View task',


  description: 'Display "Task" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/task'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
