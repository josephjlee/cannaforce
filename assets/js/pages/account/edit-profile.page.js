parasails.registerPage('edit-profile', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    // Main syncing/loading state for this page.
    syncing: false,

    // Form data
    formData: { /* … */ },

    // For tracking client-side validation errors in our form.
    // > Has property set to `true` for each invalid property in `formData`.
    formErrors: { /* … */ },

    // Server error state for the form
    cloudError: '',
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach raw data exposed by the server.
    _.extend(this, SAILS_LOCALS);

    // Set the form data.
    this.formData.fullName = this.me.fullName;
    this.formData.emailAddress = this.me.emailChangeCandidate ? this.me.emailChangeCandidate : this.me.emailAddress;
    this.formData.nameFirst = this.me.nameFirst;
    this.formData.nameLast = this.me.nameLast;
    this.formData.phoneMobile = this.me.phoneMobile;
    this.formData.dob = this.me.birthday;
    this.formData.gender = this.me.gender;
    this.formData.identificationAuthority = this.me.govIssuedIdentityAuthority;
    this.formData.identificationNumber = this.me.govIssuedIdentityNumber;
  },
  mounted: async function() {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    submittedForm: async function() {
      // Redirect to the account page on success.
      // > (Note that we re-enable the syncing state here.  This is on purpose--
      // > to make sure the spinner stays there until the page navigation finishes.)
      this.syncing = true;
      window.location = '/account';
    },

    handleParsingForm: function() {
      // Clear out any pre-existing error messages.
      this.formErrors = {};

      var argins = this.formData;

      // Get ready to ID the Users
      var ageInput = moment().diff(argins.dob, 'years');
      var ageLegal = (ageInput >= 18);

      // Validate first name:
      if(!argins.nameFirst) {
        this.formErrors.nameFirst = true;
      }

      // Validate last name:
      if(!argins.nameLast) {
        this.formErrors.nameLast = true;
      }

      // Validate email:
      if(!argins.emailAddress) {
        this.formErrors.emailAddress = true;
      }

      // Validate phone:
      if(!argins.phoneMobile) {
        this.formErrors.phoneMobile = true;
      }

      // Validate dob:
      if(!argins.dob || (!ageLegal)) {
        this.formErrors.dob = true;
      }

      // Validate Gender:
      if(!argins.gender) {
        this.formErrors.gender = true;
      }
      
      // Validate ID Issuer:
      if(!argins.identificationAuthority) {
        this.formErrors.identificationAuthority = true;
      }

      // Validate ID Number:
      if(!argins.identificationNumber) {
        this.formErrors.Number = true;
      }



      // If there were any issues, they've already now been communicated to the user,
      // so simply return undefined.  (This signifies that the submission should be
      // cancelled.)
      if (Object.keys(this.formErrors).length > 0) {
        return;
      }

      return argins;
    },

  }
});
