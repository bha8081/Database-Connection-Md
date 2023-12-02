const User = require('../models/userModel.js')


exports.home = (req, res) => {
    res.send("Hello Bhavesh")
}


// Send data in data base
exports.createUser = async(req, res) => {
    try {
        const {name, email} = req.body

        if(!name || !email){
            throw new Error("Name and email are required")
        }

        const userEexists = User.findOne({email})

        if(userEexists){
            throw new Error("User already exists")
        }

        const user = await User.create({
            name,
            email
        })

        res.status(201).json({
            success: true,
            messsage: "User created successfully",
            user
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}


// Recive data from data base.
exports.getUsers = async(req, res) => {
    try {
    const users = await User.find({})
    res.status(200).json({
        success: true,
        message: "check data for database",
        users
    })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

// Edit User.
exports.editUser = async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message: "User Updated Successfully!",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "User can't Updated"
        })
        
    }
}

// Delete Data from Database.
exports.deleteUser = async(req, res) => {
   try {
      const userId = req.params.id
      const user = await User.findByIdAndDelete(userId)
      res.status(200).json({
        success: true,
        message: "User Deleted Successfully from DataBase!!",
        user
      })
   } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: "Data can't delete from database."
      })
   }
}