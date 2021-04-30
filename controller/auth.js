const mySql= require('mysql')

const db = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database:'gmcostdb'
});


module.exports.login_post = async (req,res)=>{
  
    try {
        const {user, profileName} = req.body;
        if(!user || !profileName ) {
            return res.status(400).render('login' )

        }
        await db.query("SELECT * FROM usertable" ,(error,result)=>{
            console.log(result);
             if (result[0].username != req.body.user && result[0].profilename != req.body.profilename){
                res.status(400).render('login')
            }else{
                res.render('reports')
            }
        })

    } catch (err) {
        console.log(err);
    }

}

