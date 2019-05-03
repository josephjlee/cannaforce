module.exports = {


    friendlyName: 'View profile or redirect',
  
  
    description: 'Display or redirect to the appropriate homepage, depending on login status.',
  
  
    exits: {
  
      success: {
        statusCode: 200,
        description: 'Requesting user is a guest, so show the public profile page.',
        viewTemplatePath: 'pages/user/user-view'
      },
  
  
    },
  
  
    fn: async function () {
  
    }
  
  
  };
  