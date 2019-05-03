module.exports = {


    friendlyName: 'View event view page',
  
  
    description: 'Display the event "View" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/event/event-view',
        description: 'Display the event view page for authenticated users.'
      },
  
    },
  
  
    fn: async function () {
  
      return {};
  
    }
  
  
  };
  