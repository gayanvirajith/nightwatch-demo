/* jshint expr: true */
module.exports = {
  'Simplifya Login' : function (client) {

      const email = process.env.SIMPLIFYA_LOGIN_EMAIL;
      const password = process.env.SIMPLIFYA_LOGIN_PASSWORD;

      client
        .url('http://52.40.65.38') // Go to url
        .waitForElementVisible('body', 1000) // wait dom loading
        .assert.title('Simplifya') // Check assertion for title
        .assert.visible('input[type=text]')
        .assert.visible('input[type=password]')
        .setValue('input[type=text]', email)
        .setValue('input[type=password]', password)
        .submitForm('#loginForm')
        .pause(3000)
        .assert.containsText('#page-title',
          'DASHBOARD')
        .end(); // End of life!
    }
};
