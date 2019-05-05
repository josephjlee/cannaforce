module.exports = {


  friendlyName: 'View homepage or redirect',


  description: 'Display or redirect to the appropriate homepage, depending on login status.',


  exits: {

    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.',
      viewTemplatePath: 'pages/homepage'
    },


    redirectUsers: {
      responseType: 'redirect',
      description: 'Requesting user is logged in, so redirect to the internal welcome page.'
    },


    redirectOperators: {
      responseType: 'redirect',
      description: 'Requesting operator is logged in, so redirect to the internal operator panel.'
    },

    redirectAdmins: {
      responseType: 'redirect',
      description: 'Requesting admin is logged in, so redirect to the internal admin panel.'
    },

  },


  fn: async function () {
    // Logged in users get welcome page
    if (this.req.me && (this.req.me.isSuperAdmin == false)) {
      throw {redirectUsers:'/welcome'};
    }

    // Logged in operators get welcome page
    if (this.req.me && !(this.req.me.isOperator || this.req.me.isSuperAdmin)) {
      throw {redirectOperators:'/operator'};
    }

    // Logged in users with admin get admin page
    if (this.req.me && (this.req.me.isSuperAdmin == true)) {
      throw {redirectAdmins:'/admin', };
    }

    return {};

  }


};
