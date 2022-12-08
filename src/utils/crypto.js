//* llamado de dependencia
const bcrypt = require('bcrypt')

//* Encriptación de la contraseña de texto plano
const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}

//* retorna un booleano (de la comparación de la contraseña con el encriptado)
const comparePassword = (plainPassword, hashedPassword) => { 
    return bcrypt.compareSync(plainPassword, hashedPassword)
}

module.exports = {
    hashPassword,
    comparePassword
} 