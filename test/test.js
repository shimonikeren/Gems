var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("Gems", function() {
  this.timeout(30000);
  it("should send user to home page", function(done) {
    Nightmare({ show: true })
      .goto("http://localhost:8080/gems/all")
      .click("a[href='/login']")
      .evaluate(function() {
        return document.title;
      })
      .then(function(title) {
        expect(title).to.equal("Gems");
        done();
      });
  });

  it("should log user in", function(done) {
    new Nightmare({ show: true })
      .goto("http://localhost:8080/login")
      .type("#login-name", "kerennn")
      .type("#login-pw", "123")
      .click("#login-btn")
      .evaluate(function() {
        return document.querySelector("a[href='/gems/all']");
      })
      .then(function(link) {
        expect(link).to.not.equal(undefined);
        done();
      });
  });

  
});
