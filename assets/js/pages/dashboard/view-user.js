parasails.registerPage('view-user', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  inputs: {


  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function (inputs){
    _.extend(this, req, window.SAILS_LOCALS);
    if(!req.param('id')){
      //Form does not contain the necessary user so lookup default profile
      this.targetUser = "1",
      this.id = this.targetUser
    }



  },
  mounted: async function() {
    // If the email address is not found, throw an error
    if (this.id) {
      let existingUser = await User.findOne({
        or: [
          { emailAddress: this.targetUser },
          { emailChangeCandidate: this.targetUser }
        ]
      });
      if (!existingUser) {
        throw 'userNotFound';
      }
      else{
        // Set the form data.
        this.userData.nameFirst = this.existingUser.nameFirst;
        this.formData.emailAddress = this.me.emailChangeCandidate ? this.me.emailChangeCandidate : this.me.emailAddress;
        this.formData.nameFirst = this.me.nameFirst;
        this.formData.nameLast = this.me.nameLast;
        this.formData.phoneMobile = this.me.phoneMobile;
        this.formData.dob = this.me.birthday;
        this.formData.gender = this.me.gender;
        this.formData.identificationAuthority = this.me.govIssuedIdentityAuthority;
        this.formData.identificationNumber = this.me.govIssuedIdentityNumber;
      }
    }
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

  }
});
