/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    eventDate: {
      type: 'string',
      required: true,
      description: 'Full representation of the event\'s date.',
      maxLength: 120,
      example: 'Mary Sue van der McHenst'
    },

    severityLevel: {
      type: 'number',
      required: true,
      description: 'Full representation of the event\'s level.',
      example: 0
    },

    eventName: {
      type: 'string',
      required: true,
      description: 'Short representation of the event\'s name.',
      maxLength: 120,
      example: 'Mary Sue van der McHenst'
    },

    eventNumber: {
      type: 'number',
      required: true,
      description: 'Full representation of the event\'s number.',
      example: 0
    },

    eventDescription: {
      type: 'string',
      required: true,
      description: 'Full representation of the event\'s description.',
      maxLength: 120,
      example: 'Mary Sue van der McHenst'
    },



    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    // n/a

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    // n/a

  },


};
