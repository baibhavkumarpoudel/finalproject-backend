const Pcard = require('../models').Pcard;

const allPcards = (req,res) => {
    Pcard.findAll().then(pcards => {
        res.json(pcards)
    })
}

const pcardsId = (req,res) => {
    Pcard.findByPk(req.params.pcardId).then(pcardsFind => {
        res.json(pcardsFind)
    })
}


module.exports = {
    allPcards,
    pcardsId
}
