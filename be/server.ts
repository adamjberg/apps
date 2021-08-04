import { auth, requiresAuth } from 'express-openid-connect';
import express from 'express'
import dotenv from "dotenv";

dotenv.config();

const app = express()
const port = 3000

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH_SECRET,
  clientID: 'Ks7P3ijr2g8TQQL9Q0U2H8TAfmnJfiG7',
  issuerBaseURL: 'https://xyzdigital.us.auth0.com'
};

app.use(auth(config));

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})