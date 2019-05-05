// test/integration/controllers/login.test.js
var supertest = require('supertest'),
loginDetails = {
  emailAddress: "support@cannaforce.com",
  password: "changeme"
};

describe('UserController.login', function() {

  describe('#login()', function() {
    it('post: login variables to create session', function(done) {
      // Create Auth request
      supertest(sails.hooks.http.app)
          .post('/api/v1/entrance/login')
          .send(loginDetails)
          .end(function(error, response) {
              if (error) {
                  throw error;
              } 
              done();
          });

    });
  });
});

