/**
 * Role.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    roleName: {
      type: 'string',
      required: true,
      unique: true,
      maxLength: 200,
      example: 'operator'
    },

    roleAccessAdminRead: {
      type: 'boolean',
      description: 'true or false grant access for admin'
    },

    roleAccessAdminWrite: {
      type: 'boolean',
      description: 'true or false grant access for admin'
    },

    roleAccessDevRead: {
      type: 'boolean',
      description: 'true or false grant access for dev'
    },

    roleAccessDevWrite: {
      type: 'boolean',
      description: 'true or false grant access for dev'
    },

    roleAccessOpsRead: {
      type: 'boolean',
      description: 'true or false grant access for ops'
    },

    roleAccessOpsWrite: {
      type: 'boolean',
      description: 'true or false grant access for ops'
    },




    lastSeenAt: {
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
