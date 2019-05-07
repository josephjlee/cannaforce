module.exports = {


    friendlyName: 'Validate email',
  
  
    description: 'Display "Email" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/validate/validate-email'
      }
  
    },
  
  
    fn: async function () {
  
      // Respond with view.
      return {};
  
    }
  
  
  };
  