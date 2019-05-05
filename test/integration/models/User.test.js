// ./test/integration/models/User.test.js

var util = require('util');

describe('User (model)', function() {

  describe('##findUsers()', function() {
    it('should return 1 user', function (done) {
      User.findUsers()
      .then(function(findUsers) {

        if (findUsers.length < 1) {
          return done(new Error(
            'Should return more than 1 admin -- the admin account '+
            'is needed to create operators, who can, in part modify users.  '+
            'But instead, got: '+util.inspect(findUsers, {depth:null})+''
          ));
        }//-•

        return done();

      })
      .catch(done);
    });
  });

});