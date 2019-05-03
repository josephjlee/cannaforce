module.exports = {


    friendlyName: 'View user edit page',
  
  
    description: 'Display the user "Edit" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/user/user-edit',
        description: 'Display the user edit page for authenticated users.'
      },
  
    },
  
  
    fn: async function () {
  
      return {};
  
    }
  
  
  };
  