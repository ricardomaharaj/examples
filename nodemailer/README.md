# nodemailer gmail oauth example

### usage with personal account

- setup an oauth client credential on https://console.cloud.google.com/apis/credentials
- on your consent screen add https://mail.google.com to your scopes
- get your refresh token
  - go to https://developers.google.com/oauthplayground
  - click the gear at the top right
  - choose to use your own creds and insert you client id and secret
    - you'll need to add the playground to your oauth's authorized redirect uris
  - add https://mail.google.com to the "step 1" scopes
  - click "authorize apis" button and click through the consent screen
  - on step 2 click "exchange auth code for tokens" button
  - you now have your refresh token
- add your client id, secret, and refresh token to the `.env` file
- add your personal gmail (that you used on the consent screen) as the personal gmail in the `.env` file

### usage with a service account (requires google enterprise and google admin)

see full guide at https://docs.emailengine.app/gmail-oauth-service-accounts
