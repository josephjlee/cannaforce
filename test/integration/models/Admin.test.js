// ./test/integration/models/User.test.js

var util = require('util');

describe('User (model)', function() {

  describe('##findAdmins()', function() {
    it('should return 1 user', function (done) {
      User.findAdmins()
      .then(function(findAdmins) {

        if (findAdmins.length < 1) {
          return done(new Error(
            'Should return more than 1 admin -- the admin account '+
            'is needed to create operators, who can, in part modify users.  '+
            'But instead, got: '+util.inspect(findAdmins, {depth:null})+''
          ));
        }//-•

        return done();

      })
      .catch(done);
    });
  });

});