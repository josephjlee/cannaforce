// test/integration/controllers/login.test.js
var supertest = require('supertest'),
  should = require('should'),
  loginDetails = {
    "emailAddress": "markchristopherwest@gmail.com",
    "password": "changeme"
  };

describe('#login.logout()', function () {
  // First, post the user session to the API
  it('POST: login variables to create session', function (done) {
    // Create Auth request
    supertest(sails.hooks.http.app)
      .post('/api/v1/entrance/login')
      .set('Accept', 'application/json')
      .send(loginDetails)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        Cookies = res.headers['set-cookie'].pop().split(';')[0];
        done();
      });

  });
  // Second, take the cookie & pass it to the login
  it('GET: should be able to get appropriate page/priv for current user', function (done) {
    var req = supertest(sails.hooks.http.app).get('/login');
    // Set cookie to get saved user session
    req.cookies = Cookies;
    req.set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect('location', '/welcome')
      .end(function (err, res) {
        // Nothing to see here       
        done();
      });
  });
  // Third, take the cookie & pass it to the logout
  it('GET: should be able to get logout current user', function (done) {
    var req = supertest(sails.hooks.http.app).get('/logout');
    // Set cookie to get saved user session
    req.cookies = Cookies;
    req.set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect('location', '/login')
      .end(function (err, req) {
        // Nothing to see here
        done();
      });
  });
  // Last, verify that secure resources like account can not be accessed after logout
  it('GET: should not be able to reach account when logged out', function (done) {
    var req = supertest(sails.hooks.http.app).get('/account');
    // Set cookie to get saved user session
    req.cookies = Cookies;
    req.set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401)
      .end(function (err, req) {
        // Nothing to see here
        done();
      });
  });
});


