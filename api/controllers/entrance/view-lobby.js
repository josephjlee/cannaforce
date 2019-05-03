module.exports = {


  friendlyName: 'View lobby',


  description: 'Display "lobby" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/entrance/lobby',
    },

    redirect: {
      description: 'The requesting user is already logged in.',
      responseType: 'redirect'
    }

  },


  fn: async function () {

    if (this.req.me) {
      throw {redirect: '/'};
    }

    return {};

  }


};
