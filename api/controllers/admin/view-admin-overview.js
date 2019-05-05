module.exports = {


  friendlyName: 'View homepage or redirect',


  description: 'Display or redirect to the appropriate homepage, depending on login status.',


  exits: {


    success: {
      viewTemplatePath: 'pages/admin/admin-overview',
    },


    redirectUsers: {
      responseType: 'redirect',
      description: 'Requesting user is logged in, so redirect to the internal welcome page.'
    },


    redirectOperators: {
      responseType: 'redirect',
      description: 'Requesting operator is logged in, so redirect to the internal operator panel.'
    },


  },


  fn: async function () {
    // Logged in users get welcome page
    if (this.req.me && (this.req.me.isSuperAdmin == false)) {
      throw {redirectUsers:'/'};
    }

    // Logged in operators get welcome page
    if (this.req.me && !(this.req.me.isOperator || this.req.me.isSuperAdmin)) {
      throw {redirectOperators:'/operator'};
    }

    // Logged in operators get welcome page
    if (this.req.me && (this.req.me.isSuperAdmin == true)) {
      console.log('SecBot: the admin ' + this.req.me.emailAddress + ' is viewing the admin panel.')
    }

    return {};

  }


};
