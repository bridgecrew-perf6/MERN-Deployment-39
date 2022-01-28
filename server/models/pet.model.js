const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator')

const PetSchema = new mongoose.Schema({

// plug-in also does not let EDIT update "name exists"
 
    name: {
        type: String,
        required: [true, "Name cannot be left blank!"],
        minlength: [3, "Name must have at least 3 characters"],
        unique: [true]
        // DID NOT WORK 
        // validate: {
        //     validator: async function(name) {
        //         const pet = await Pet.findOne({name});
        //         if (name) {
        //             if(this.id === name.id) {
        //                 return true;
        //             }
        //             return false
        //         }
        //         return true;
        //     },
        //     message: "Name is already in use, please choose another"
        // }

    },
    type: {
        type: String,
        required: [true, "Type cannot be left blank!"],
        minlength: [3, "Type must have at least 3 characters"],

    },
    description: {
        type: String,
        required: [true, "Description cannot be left blank!"],
        minlength: [3, "Description must have at least 3 characters!"]
    },
    skill1: {
        type: String,
        required: [false],
    },
    skill2: {
        type: String,
        required: [false],
    },
    skill3: {
        type: String,
        required: [false],
    }
}, { timestamps: true });

// PetSchema.plugin(uniqueValidator, { message: "Name is already in use, please choose another" })
module.exports.Pet = mongoose.model('Pet', PetSchema);