const mySql = require('mysql')

const db = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'gmcost'
});


module.exports.login_post = async (req, res) => {

    console.log(req.body)


    const user = req.body.user;
    const profileName = req.body.profilename;


    const auth = await db.query("SELECT * FROM usertable where username = ? and profilename = ? ", [user, profileName],
        function (error, result, fields) {
            if (result.length > 0 ) {
                res.redirect('/reports')
            } else {
                res.redirect("/login")
            }
        })
}