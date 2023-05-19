var request = require('supertest');
var app = require('../app.js');describe('GET /', function() {
 it('respond with This is my first nodejs app!', function(done) { //navigate to root and check the the response is "This is my first nodejs app!"
 request(app).get('/').expect('This is my first nodejs app!', done);
 });
});
