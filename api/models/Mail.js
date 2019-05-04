/**
 * Mail.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    mailDate: {
      type: 'string',
      required: true,
      description: 'Full representation of the mail\'s date.',
      maxLength: 120,
      example: 'Mary Sue van der McHenst'
    },

    severityLevel: {
      type: 'number',
      required: true,
      description: 'Full representation of the mail\'s level.',
      example: 0
    },

    mailName: {
      type: 'string',
      required: true,
      description: 'Short representation of the mail\'s name.',
      maxLength: 120,
      example: 'Mary Sue van der McHenst'
    },

    mailNumber: {
      type: 'number',
      required: true,
      description: 'Full representation of the mail\'s number.',
      example: 0
    },

    mailDescription: {
      type: 'string',
      required: true,
      description: 'Full representation of the mail\'s description.',
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
