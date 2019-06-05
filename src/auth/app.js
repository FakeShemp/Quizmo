const express = require('express');
const app = express();

const client_id = 'e7255a85242743f78adad65d53aae059'; // Your client id
// const client_secret = '958dfc86adea4633939403cae43f8e6d'; // Your secret
const redirect_uri = 'http://localhost:3000/dashboard'; // Your redirect uri

app.get('/login', function(req, res) {
    var scopes = 'user-read-private user-read-email playlist-read-private';
    res.redirect('https://accounts.spotify.com/authorize' +
      '?response_type=token' +
      '&client_id=' + client_id +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent(redirect_uri));
    });

    console.log("listening on 1337")
    app.listen(1337)