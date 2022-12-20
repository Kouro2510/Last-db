const authService = require("../service/auth");

let Login = async (req, res) => {
    let usernames=req.body.username;
    let password = req.body.password;
    let userData = await authService.UserLogin(usernames, password);
    return res.status(200).json({
        errCode: userData.errCode,
        errMessage: userData.errMessage,
        user: userData.user ? userData.user : {},
    });
};
const Logout = async (req, res) => {
    await res.clearCookie('refreshToken');
    let response = await authService.Logout(req.query.id);

    return res.status(200).json(response);
};
module.exports = {
    Login,
    Logout
}