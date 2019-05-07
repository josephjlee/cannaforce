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

    emailAddress: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: 'mary.sue@example.com'
    },

    emailStatus: {
      type: 'string',
      isIn: ['unconfirmed', 'change-requested', 'confirmed'],
      defaultsTo: 'confirmed',
      description: 'The confirmation status of the user\'s email address.',
      extendedDescription:
`Users might be created as "unconfirmed" (e.g. normal signup) or as "confirmed" (e.g. hard-coded
admin users).  When the email ication feature is enabled, new users created via the
signup form have \`emailStatus: 'unconfirmed'\` until they click the link in the confirmation email.
Similarly, when an existing user changes their email address, they switch to the "change-requested"
email status until they click the link in the confirmation email.`
    },

    emailChangeCandidate: {
      type: 'string',
      isEmail: true,
      description: 'A still-unconfirmed email address that this user wants to change to (if relevant).'
    },

    password: {
      type: 'string',
      required: true,
      description: 'Securely hashed representation of the user\'s login password.',
      protect: true,
      example: '2$28a8eabna301089103-13948134nad'
    },

    nameFirst: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s first name.',
      maxLength: 120,
      example: 'Mary Sue van der McHenst'
    },

    nameLast: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s last name.',
      maxLength: 120,
      example: 'Mary Sue van der McHenst'
    },

    phoneMobile: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s phone mobile.',
      maxLength: 120,
      example: 'Mary Sue van der McHenst'
    },

    gender: {
      type: 'number',
      required: true,
      description: 'Full representation of the user\'s gender.',
      example: 0
    },

    birthday: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s dob.',
      maxLength: 120,
      example: 'Mary Sue van der McHenst'
    },

    govIssuedIdentityAuthority: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s identity state.',
      maxLength: 120,
      example: 'CA'
    },

    govIssuedIdentityNumber: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s identity number.',
      maxLength: 120,
      example: 'X1234567'
    },

    verification: {
      type: 'boolean',
      required: true,
      description: 'Full representation of the user\'s verification status.'
    },

    verificationEmail: {
      type: 'boolean',
      required: true,
      description: 'E representation of the user\'s email status.'
    },

    verificationIdentity: {
      type: 'boolean',
      required: true,
      description: 'Full representation of the user\'s identity status.'
    },

    verificationMedical: {
      type: 'boolean',
      required: true,
      description: 'Full representation of the user\'s medical status.'
    },

    isType: {
      type: 'number',
      description: 'Full representation of the user\'s type status.'
    },

    isMedical: {
      type: 'boolean',
      description: 'Full representation of the user\'s medical status.'
    },

    isOperator: {
      type: 'boolean',
      description: 'Whether this user is a "operator" with extra permissions, etc.'
    },

    isSuperAdmin: {
      type: 'boolean',
      description: 'Whether this user is a "super admin" with extra permissions, etc.'
    },
  
    isVendor: {
      type: 'boolean',
      description: 'Full representation of the user\'s vendor status.'
    },

    passwordResetToken: {
      type: 'string',
      description: 'A unique token used to y the user\'s identity when recovering a password.  Expires after 1 use, or after a set amount of time has elapsed.'
    },

    passwordResetTokenExpiresAt: {
      type: 'number',
      description: 'A JS timestamp (epoch ms) representing the moment when this user\'s `passwordResetToken` will expire (or 0 if the user currently has no such token).',
      example: 1502844074211
    },

    emailProofToken: {
      type: 'string',
      description: 'A pseudorandom, probabilistically-unique token for use in our account ication emails.'
    },

    emailProofTokenExpiresAt: {
      type: 'number',
      description: 'A JS timestamp (epoch ms) representing the moment when this user\'s `emailProofToken` will expire (or 0 if the user currently has no such token).',
      example: 1502844074211
    },

    stripeCustomerId: {
      type: 'string',
      protect: true,
      description: 'The id of the customer entry in Stripe associated with this user (or empty string if this user is not linked to a Stripe customer -- e.g. if billing features are not enabled).',
      extendedDescription:
`Just because this value is set doesn't necessarily mean that this user has a billing card.
It just means they have a customer entry in Stripe, which might or might not have a billing card.`
    },

    isBillingEnabled: {
      type: 'boolean',
      description: 'Whether this user has a default billing enabled.',
      extendedDescription:
`More specifically, this indcates whether this user record's linked customer entry in Stripe has
a default payment source (i.e. credit card).  Note that a user have a \`stripeCustomerId\`
without necessarily having a billing card.`
    },

    isEmailVerificationRequired: {
      type: 'boolean',
      description: 'Does the email need to be verified?',
      extendedDescription:
`More specifically, has this email been updated & has the email confirmation link been clicked?`
    },

    hasBillingCard: {
      type: 'boolean',
      description: 'Whether this user has a default billing card hooked up as their payment method.',
      extendedDescription:
`More specifically, this indcates whether this user record's linked customer entry in Stripe has
a default payment source (i.e. credit card).  Note that a user have a \`stripeCustomerId\`
without necessarily having a billing card.`
    },

    billingCardBrand: {
      type: 'string',
      example: 'Visa',
      description: 'The brand of this user\'s default billing card (or empty string if no billing card is set up).',
      extendedDescription: 'To ensure PCI compliance, this data comes from Stripe, where it reflects the user\'s default payment source.'
    },

    billingCardLast4: {
      type: 'string',
      example: '4242',
      description: 'The last four digits of the card number for this user\'s default billing card (or empty string if no billing card is set up).',
      extendedDescription: 'To ensure PCI compliance, this data comes from Stripe, where it reflects the user\'s default payment source.'
    },

    billingCardExpMonth: {
      type: 'string',
      example: '08',
      description: 'The two-digit expiration month from this user\'s default billing card, formatted as MM (or empty string if no billing card is set up).',
      extendedDescription: 'To ensure PCI compliance, this data comes from Stripe, where it reflects the user\'s default payment source.'
    },

    billingCardExpYear: {
      type: 'string',
      example: '2023',
      description: 'The four-digit expiration year from this user\'s default billing card, formatted as YYYY (or empty string if no credit card is set up).',
      extendedDescription: 'To ensure PCI compliance, this data comes from Stripe, where it reflects the user\'s default payment source.'
    },

    tosAcceptedByIp: {
      type: 'string',
      description: 'The IP (ipv4) address of the request that accepted the terms of service.',
      extendedDescription: 'Useful for certain types of businesses and regulatory requirements (KYC, etc.)',
      moreInfoUrl: 'https://en.wikipedia.org/wiki/Know_your_customer'
    },

    lastSeenAt: {
      type: 'number',
      description: 'A JS timestamp (epoch ms) representing the moment at which this user most recently interacted with the backend while logged in (or 0 if they have not interacted with the backend at all yet).',
      example: 1502844074211
    },



  },

    // Find admins 
    findAdmins: async function (opts) {
      var admins = await User.findOne({ isSuperAdmin: false });

      if (!admins) {
          throw require('flaverr')({
        message: `Cannot find admins with the same name as the person w/ id=${opts.id} because one record with isAdmin does not exist.`,
        code: 'E_UNKNOWN_PERSON'
      });
      }

      return admins;
    },
    // Find users 
    findUsers: async function (opts) {
      var users = await User.findOne({ isSuperAdmin: false });

      if (!users) {
          throw require('flaverr')({
        message: `Cannot find users with the same name as the person w/ id=${opts.id} because one record with isAdmin does not exist.`,
        code: 'E_UNKNOWN_PERSON'
      });
      }

      return users;
    }
};
