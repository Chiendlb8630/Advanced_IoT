
const admin = require("firebase-admin");
const serviceAccount = require('./test-347e7-firebase-adminsdk-uk3ph-2495b9afe9.json'); 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-347e7-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin.database(); 
module.exports = db;


