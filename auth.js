var google = require('googleapis')
var OAuth2 = google.auth.OAuth2
const ClientId = '824734289960-8kfj90qo65jng0hkl1a9oh59i2lll4nf.apps.googleusercontent.com'
const ClientSecret = 'rAIIPMbg0GCQT-j-ceo2_e53'
const RedirectionUrl = 'http://localhost:3000/auth/google/callback'

exports.getOAuthClient = function getOAuthClient () {
  return new OAuth2(ClientId, ClientSecret, RedirectionUrl)
}

exports.getAuthUrl = function getAuthUrl () {
  var oauth2Client = this.getOAuthClient()
  // generate a url that asks permissions for Google+ and Google Calendar scopes
  var scopes = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/drive'
  ]

  var url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes // If you only need one scope you can pass it as string
  })

  return url
}
