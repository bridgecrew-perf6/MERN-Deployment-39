const PetController = require('../controllers/pet.controller');



module.exports = (app) => {

    // CREATE 
    app.post('/api/pet/create', PetController.createPet)

    // GET ALL 
    app.get('/api/pet/all', PetController.findAllPets)

    // GET ONE 
    app.get('/api/pet/:id', PetController.findOnePet)


    // DELETE 
    app.delete('/api/pet/delete/:id', PetController.adoptPet)

    // UPDATE 
    app.put('/api/pet/update/:id', PetController.updatePet)
}