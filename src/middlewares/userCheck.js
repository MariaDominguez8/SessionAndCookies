module.exports = (req,res,next) => {
   
    let colourCookie = req.cookies.colour;
    let nameCookie = req.cookies.name;
   
   if (colourCookie) {
        req.session.user = {
            backgroundColour : colourCookie,
            name : nameCookie
        }
   }

   if (req.session.user) {
         res.locals.isLogged= true;
         res.locals.user = req.session.user
   }
   next()
}
