const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");

const jwtSecret = require("../../config").api.jwtSecret;
const { findUserById } = require("../users/users.controllers");


const options = {
     //* Revisa el header; Authorization JWT token
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    //* palabra secreta para validar el token
    secretOrKey: jwtSecret,
};

passport.use (
    new JwtStrategy(options, async (tokenDecoded, done) => {
        //* verificamos si existe un usuario con id especificada (obtenida de la decodificación)
        
        try {
            const user = await findUserById(tokenDecoded.id);

            if (!user) {
                //! No existe un error, pero tampoco existe el usuario
                return done (null, false);
            }
            //* No existe un error, si existe un usuario
            return done (null, tokenDecoded); 

        } catch (error) {
            //! Si existe un error, pero no un usuario
            return done (error, false); 
        }
    })
);

module.exports = passport;