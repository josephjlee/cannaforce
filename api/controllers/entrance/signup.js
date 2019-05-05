module.exports = {


  friendlyName: 'Signup',


  description: 'Sign up for a new user account.',


  extendedDescription:
`This creates a new user record in the database, signs in the requesting user agent
by modifying its [session](https://sailsjs.com/documentation/concepts/sessions), and
(if emailing with Mailgun is enabled) sends an account verification email.

If a verification email is sent, the new user's account is put in an "unconfirmed" state
until they confirm they are using a legitimate email address (by clicking the link in
the account verification message.)`,


  inputs: {

    emailAddress: {
      required: true,
      type: 'string',
      isEmail: true,
      description: 'The email address for the new account, e.g. m@example.com.',
      extendedDescription: 'Must be a valid email address.',
    },

    password: {
      required: true,
      type: 'string',
      maxLength: 200,
      example: 'passwordlol',
      description: 'The unencrypted password to use for the new account.'
    },

    nameFirst:  {
      required: true,
      type: 'string',
      example: 'Bob',
      description: 'The user\'s first name.',
    },

    nameLast:  {
      required: true,
      type: 'string',
      example: 'Marley',
      description: 'The user\'s last name.',
    },

    phoneMobile:  {
      required: true,
      type: 'string',
      example: '8005551212',
      description: 'The user\'s mobile phone.',
    },

    dob:  {
      required: true,
      type: 'string',
      example: '2001-04-20',
      description: 'The user\'s date of birth.',
    },
    
    gender:  {
      required: true,
      type: 'number',
      example: 0,
      description: 'The user\'s gender identity.',
    },
    
    userType: {
      required: true,
      type: "number",
      description: 'the kind of user medical, etc.'
    },
    
    
    identificationAuthority:  {
      required: true,
      type: 'string',
      example: 'California',
      description: 'The user\'s issuer of identity.',
    },
    
    identificationNumber:  {
      required: true,
      type: 'string',
      example: 'X1234567',
      description: 'The user\'s number of identity.',
    }

  },


  exits: {

    success: {
      description: 'New user account was created successfully.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'The provided fullName, password and/or email address are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
      'parameters should have been validated/coerced _before_ they were sent.'
    },

    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },

  },


  fn: async function (inputs) {

    var newEmailAddress = inputs.emailAddress.toLowerCase();

    // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    sails.log.info('Ready to Add' + newEmailAddress);
    var newUserRecord = await User.create(_.extend({
      emailAddress: newEmailAddress,
      password: await sails.helpers.passwords.hashPassword(inputs.password),
      nameFirst: inputs.nameFirst,
      nameLast: inputs.nameLast,
      phoneMobile: inputs.phoneMobile,
      gender: inputs.gender,
      birthday: inputs.dob,
      gender: inputs.gender,
      govIssuedIdentityAuthority: inputs.identificationAuthority,
      govIssuedIdentityNumber: inputs.identificationNumber,
      verification: 'false',
      verificationEmail: 'false',
      verificationIdentity: 'false',
      verificationMedical: 'false',
      isType: inputs.userType,
      isMedical: 'false',
      isVendor: 'false',
      tosAcceptedByIp: this.req.ip
    },
    sails.log.info('After Record Creation'),
    sails.config.custom.verifyEmailAddresses? {
      emailProofToken: await sails.helpers.strings.random('url-friendly'),
      emailProofTokenExpiresAt: Date.now() + sails.config.custom.emailProofTokenTTL,
      emailStatus: 'unconfirmed'
    }:{}))
    .intercept('E_UNIQUE', 'emailAlreadyInUse')
    .intercept({name: 'UsageError'}, 'invalid')
    .fetch();

    // If billing feaures are enabled, save a new customer entry in the Stripe API.
    // Then persist the Stripe customer id in the database.
    if (sails.config.custom.enableBillingFeatures) {
      let stripeCustomerId = await sails.helpers.stripe.saveBillingInfo.with({
        emailAddress: newEmailAddress
      }).timeout(5000).retry();
      await User.updateOne(newUserRecord.id)
      .set({
        stripeCustomerId
      });
    }

    // Store the user's new id in their session.
    this.req.session.userId = newUserRecord.id;

    if (sails.config.custom.verifyEmailAddresses) {
      // Send "confirm account" email
      await sails.helpers.sendTemplateEmail.with({
        to: newEmailAddress,
        subject: 'Please confirm your account',
        template: 'email-verify-account',
        templateData: {
          fullName: inputs.nameFirst + ", " + inputs.nameLast,
          token: newUserRecord.emailProofToken
        }
      });
    } else {
      sails.log.info('Skipping new account email verification... (since `verifyEmailAddresses` is disabled)');
    }

  }

};
