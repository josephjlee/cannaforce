module.exports = {


    friendlyName: 'View profile edit page',
  
  
    description: 'Display the profile "Edit" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/profile/profile-edit',
        description: 'Display the profile edit page for authenticated users.'
      },
  
    },
  
  
    fn: async function () {
  
      return {};
  
    }
  
  
  };
  