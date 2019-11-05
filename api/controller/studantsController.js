const express = require('express');
const studantsModel = require('../model/studantsModel');
const router = express.Router();

// --------------- auxiliary functions ------------ //
async function findStundat(ID) {
    return await studantsModel.findOne({where: {
        PES_ID : ID
    }});
}

// ---------------- Find Stundat ------------------ //
router.get('/findone', async (req,res) => {
    try {
        const ID = req.body.PES_ID;
        const studant = await findStundat(ID);
        
        if (!studant) throw 'Studant not found!';

        res.status(200).json(studant)
    } catch (err) {
        res.status(400).json({'msg': err})
    }
});

 //  ----------- Find All Stundats ---------------- //
router.get('/findall', async (req, res) => {
    try {
        const studants = await studantsModel.findAll({});
        res.status(200).json(studants)
    } catch (err) {
        res.status(404).send(err)
    }
});

// -------------- Add new Stundat ---------------- //
router.post('/add', async (req, res) => {
    try {
        let studant = await studantsModel.findOne({
            where: {
                PES_CPF: req.body.PES_CPF
            }
        });

        if (studant) throw 'registered student!';
        
        let newStudant = await studantsModel.create(req.body);
        res.status(201).json(newStudant)
    }
    catch (err) {
        res.status(400).json({'msg':err});
    }
});

// ------------- Delete Stundant ----------------- //
router.delete('/delete', async (req,res) => {
    try {
        const ID = req.body.PES_ID;
        const studant = await findStundat(ID);

        if (!studant ) throw 'Stundant not found!';

        const excludeStudant = await aluno.destroy({
            where: {
                PES_ID : req.body.PES_ID
            }
        });
        res.status(200).json(excludeStudant);
    } catch (err) {
        res.status(404).json({'msg': err});
    }
});

// ------------- Update Stundant ----------------- //
router.put('/update', async (req, res) => {
    try {
        const ID = req.body.PES_ID;
        if (!ID) throw 'ID nof found!';

        const studant = buscaAluno(ID);
        if (!studant) throw 'Studant not found!';
    
        const studantUpdate = await aluno.update(req.body, {where: {
            PES_ID: req.body.PES_ID
        }})
    
        res.status(200).json(studantUpdate);
    } catch (err) {
        res.status(400).json({'msg': err})
    }
});

module.exports = router;


