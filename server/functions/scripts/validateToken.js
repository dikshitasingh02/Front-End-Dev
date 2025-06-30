const functions = require("firebase-functions");
const admin = require("../config/admin");
const cors = require('cors');
const corsHandler = cors({ origin: true});

exports.validateToken = functions.https.onRequest(async (req, res) => {
  corsHandler(req, res, async () => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split("Bearer ")[1];

     //console.log("🔐 Token received:", token); // log it

    if (!token) {
      return res.status(401).json({ message: "No token received" });
    }

    try {
      const decoded = await admin.auth().verifyIdToken(token);
      //console.log("✅ Decoded token:", decoded);

      const user = await admin.auth().getUser(decoded.uid);
      return res.status(200).json({ user });
    } catch (err) {
      //console.error("❌ Token verification failed:", err.message);
      return res.status(401).json({ message: "Invalid Token", error: err.message });
    }
  });
});
