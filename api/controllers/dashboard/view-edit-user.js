module.exports = {


  friendlyName: 'View account overview',


  description: 'Display "Account Overview" page.',


  inputs: {

    id: {
      required: false,
      type: 'string',
      isEmail: true,
      description: 'The email address for the new account, e.g. m@example.com.',
      extendedDescription: 'Must be a valid email address.',
    },
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/view-edit-user',
    }

  },


  fn: async function () {



  }


};
