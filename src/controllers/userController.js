const { validationResult } = require("express-validator");

module.exports = {
    processRegister : (req,res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let {name,backgroundColour,email,age} = req.body;
            let recordar = req.body.recordar;
            if (recordar) {
              res.cookie("colour", req.body.backgrounColour,{maxAge:7200});
              res.cookie("name", req.body.name,{maxAge:7200});
            }
            req.session.user = {
                backgroundColour,
                name
              };
            res.redirect('/users',{name,backgroundColour,email,age})
        } else {
            res.render('index',{errors:errors.mapped(),old:req.body})
        }

    },
    user:(req,res)=>{
        res.render('user',{
            backgroundColour: req.session.user.backgroundColour,
            name: req.session.user.name,
        })        
    },
    reset:(req,res)=>{
        req.session.destroy();
        res.clearCookie('name');
        res.clearCookie('backgroundColour');
        res.redirect("/");
    }
}