/**
 * Product.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    productSerial: {
      type: 'string',
      required: true,
      unique: true,
      maxLength: 200
    },

    productManufacturer: {
      type: 'string',
      description: 'lorem ipsum'
    },

    productName: {
      type: 'string',
      description: 'lorem ipsum'
    },

    productVersion: {
      type: 'string',
      description: 'lorem ipsum'
    },

    productSize: {
      type: 'string',
      description: 'lorem ipsum'
    },

    productWeight: {
      type: 'string',
      description: 'lorem ipsum'
    },

    productPriceList: {
      type: 'number',
      description: '4.20'
    },

    productPriceCost: {
      type: 'number',
      description: '1.00'
    },

    productUniversalCategory: {
      type: 'string',
      description: 'lorem ipsum'
    },

    productUniversalDemo: {
      type: 'string',
      description: 'lorem ipsum'
    },

    productUniversalSale: {
      type: 'string',
      description: 'lorem ipsum'
    },

    productVersion: {
      type: 'string',
      description: 'lorem ipsum'
    },

    productUpdateLast: {
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
