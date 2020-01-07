import User from "../model/user"
import routes from "../routes"
import passport from "passport"


export const login = (req, res) => {
    res.render("login", {title:"LOGIN"})
}

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home)
}

export const postLogin = passport.authenticate('local', {
    failureRedirect: routes.login,
    successRedirect: routes.home
})

export const join = (req, res) => {
    res.render("join", {title:"JOIN", msg:""})
}



export const postJoin = async(req, res) => {
   const {
       body: { name,email, password1, password2}
   }= req;

   if(password1 === password2 && password1.length >= 6){
       try{
   const user = await User({
    name,   
    email
   });
   const newUser = await User.register(user, password1);
   res.redirect(routes.login)
   console.log(newUser)
}catch(error){
    console.log(error)
}
}else if(password1 !== password2 && password1.length >= 6) {
    res.render("join", {title:"JOIN", msg: 'passwords not same'})
}else if(password1 === password2 && password1.length < 6){
    res.render("join", {title:"JOIN", msg: 'password should be at least 6 characters'})
}

}

export const googleLoginCallback = async(_, __, profile, cb) => {
    console.log(profile, cb)
    const {
        _json: {sub, picture, name, email},
        
    } = profile;
    
    try{
        const newUser = await User.findOne({
            email
        })
        if(newUser){
            newUser.googleId = sub
            newUser.save();
            return cb(null, newUser)
        }else{
            const newUser = await User.create({
            googleId: sub,
            avatarUrl: picture,
            name,
            email
            });
            return cb(null, newUser)
        }
        console.log(newUser)

    }catch(error){
       return cb(error)
    }
}