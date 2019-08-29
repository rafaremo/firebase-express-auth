const admin = require("firebase-admin");

const serviceAccount = require(process.env.FIREBASE_CONFIG_PATH);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://auth-service-acromatico.firebaseio.com"
});

module.exports = admin;