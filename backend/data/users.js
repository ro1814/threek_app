import bcrypt from 'bcryptjs'

const users = [
    {
        nombre: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        nombre: 'Ro No',
        email: 'ro@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        nombre: 'Ja Fe',
        email: 'jf@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users