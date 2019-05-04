/**
 * Task.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    taskCreator: {
      type: 'string',
      isEmail: true,
      maxLength: 200,
      example: 'mary.sue@example.com'
    },

    taskDate: {
      type: 'string',
      required: true,
      description: 'Full representation of the task\'s due date.',
      maxLength: 120,
      example: 'Mary Sue van der McHenst'
    },

    taskDescription: {
      type: 'string',
      required: true,
      description: 'Full representation of the task\'s description.',
      maxLength: 120,
      example: 'Mary Sue van der McHenst'
    },

    taskName: {
      type: 'string',
      required: true,
      description: 'Full representation of the task\'s name.',
      maxLength: 120,
      example: 'Mary Sue van der McHenst'
    },

    taskOwner: {
      type: 'string',
      isEmail: true,
      maxLength: 200,
      example: 'mary.sue@example.com'
    },

    taskPriority: {
      type: 'number',
      required: true,
      description: 'Full representation of the user\'s gender.',
      example: 0
    },

    taskStatus: {
      type: 'number',
      required: true,
      description: 'Full representation of the user\'s gender.',
      example: 0
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
