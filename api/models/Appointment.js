/**
 * Appointment.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    apptSerial: {
      type: 'number',
      unique: true,
      required: true,
      description: 'Appointment Serial'
    },

    appName: {
      type: 'string',
      isEmail: true,
      description: 'Appointment Description Here'
    },

    apptDateStart: {
      type: 'string',
      description: 'Appointment Date Begin'
    },

    apptDateStop: {
      type: 'string',
      description: 'Appointment Date End'
    },

    apptReminder: {
      type: 'boolean',
      description: 'Appointment Reminder'
    },

    apptPriority: {
      type: 'number',
      description: 'Appointment Priority'
    },

    apptDescription: {
      type: 'string',
      description: 'Appointment Description'
    },

    apptLastUpdate: {
      type: 'number',
      description: 'A JS timestamp (epoch ms) representing the moment at which this user most recently interacted with the backend while logged in (or 0 if they have not interacted with the backend at all yet).',
      example: 1502844074211
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
