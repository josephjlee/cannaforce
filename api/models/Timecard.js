/**
 * Timecard.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    emailAddress: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: 'mary.sue@example.com'
    },

    timecardDate: {
      type: 'string',
      required: true,
      description: 'Full representation of the timecard\'s date.',
      maxLength: 120,
      example: 'Mary Sue van der McHenst'
    },

    timecardName: {
      type: 'string',
      required: true,
      description: 'Short representation of the timecard\'s name.',
      maxLength: 120,
      example: 'Mary Sue van der McHenst'
    },

    timecardNumber: {
      type: 'number',
      required: true,
      description: 'Full representation of the timecard\'s number.',
      example: 0
    },

    timecardDescription: {
      type: 'string',
      required: true,
      description: 'Full representation of the timecard\'s description.',
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
