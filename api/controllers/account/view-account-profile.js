module.exports = {

  friendlyName: 'Account profile',

  description: 'Look up the specified user and welcome them, or redirect to a signup page if no user was found.',

  inputs: {
     userId: {
       description: 'The ID of the user to look up.',
       // By declaring a numeric example, Sails will automatically respond with `res.badRequest`
       // if the `userId` parameter is not a number.
       type: 'number',
       // By making the `userId` parameter required, Sails will automatically respond with
       // `res.badRequest` if it's left out.
       required: true
     }
  },

  exits: {
     success: {
       responseType: 'view',
       viewTemplatePath: 'pages/account/account-profile'
     },
     notFound: {
       description: 'No user with the specified ID was found in the database.',
       responseType: 'notFound'
     }
  },

  fn: async function (inputs, exits) {

     // Look up the user whose ID was specified in the request.
     // Note that we don't have to validate that `userId` is a number;
     // the machine runner does this for us and returns `badRequest`
     // if validation fails.
     var accountProfile = await User.findOne({ id: inputs.userId });

     // If no user was found, respond "notFound" (like calling `res.notFound()`)
     if (!accountProfile) { 
       return exits.notFound(); 
      }else{
       // Display the welcome view
       sails.log('Ok it worked!  The result is:', accountProfile);
       return exits.success(accountProfile);
      }

  }
};