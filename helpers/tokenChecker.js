const admin = require('./firebase');

const tokenChecker = async (req, res, next) => {
    let { id_token } = req.headers;

    console.log(id_token);
    
    try {
        let user = await admin.auth().verifyIdToken(id_token);
        req.isAuth = true;
        req.user = user;
        next();
    } catch(err){
        req.isAuth = false;
        req.user = null;
        next();
    }
};

module.exports = tokenChecker;