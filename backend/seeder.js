import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import retos from './data/retos.js'
import User from './models/userModel.js'
import Reto from './models/retoModel.js'
import Sponsor from './models/donacionesModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Sponsor.deleteMany()
        await User.deleteMany()
        await Reto.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleRetos = retos.map( reto => {
            return { ...reto, user: adminUser }
        })

        await Reto.insertMany(sampleRetos)

        console.log('Data imported!...'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Sponsor.deleteMany()
        await User.deleteMany()
        await Reto.deleteMany()

        console.log('Data destroyed!...'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
} else {
    importData()
}