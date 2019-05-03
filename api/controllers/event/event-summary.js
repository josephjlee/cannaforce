module.exports = {


    friendlyName: 'View event summary page',
  
  
    description: 'Display the event "Summary" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/event/event-summary',
        description: 'Display the event summary page for authenticated users.'
      },
  
    },
  
  
    fn: async function () {
  
      return {};
  
    }
  
  
  };
  