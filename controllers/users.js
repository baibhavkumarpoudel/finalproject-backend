const User = require('../models').User;
const Pcard = require('../models').Pcard;

const signup = (req,res) => {
    User.create(req.body).then(newUser =>{
        res.json(newUser)
    })
}

const login = (req,res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then(foundUser => {
        res.json(foundUser)
    })
}

const renderProfile = (req,res) => {
    User.findByPk(req.params.index).then(userProfile =>{
        Pcard.findAll().then(allPcards => {
            res.json({
                user: userProfile,
                pcard: allPcards
            })
        })
    })
}


const editProfile = (req,res) => {
    User.update(req.body, {
        where: {
            id: req.params.index
        },
        returning: true
    }).then(updatedUser => {
        res.json(updatedUser)
    })
}

const deleteUser = (req,res) => {
    User.destroy({
        where: {
            id: req.params.index
        }
    }).then(deletedUser => {
        res.json(deletedUser)
    })
}

module.exports = {
    signup,
    login,
    renderProfile,
    editProfile,
    deleteUser
}