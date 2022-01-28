const {Pet} = require('../models/pet.model');


module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json({ result: newPet }))
        .catch(err => {
            res.json({ error: err })
        })

};


module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets =>
            res.json({ result: allPets }))
        .catch(err => res.json({ message: "Something went wrong with fin all", error: err }))
}


module.exports.findOnePet = (req, res) => {
    // id in API is _id
    Pet.findOne({ _id: req.params.id })
        .then(onePet =>
            res.json({ result: onePet })
        )
        .catch(err => res.json({ message: "Something went wrong with find one", error: err }))
}


module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true })
        .then(pet =>
            res.json({ result: pet }))
        .catch(err => res.json({ message: "Something went wrong with update ", error: err }));
}


module.exports.adoptPet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(deletePet =>
            res.json({ result: deletePet }))
        .catch(err =>
            res.json({ message: 'Something went wrong', error: err }));
}