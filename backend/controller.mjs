//CONTROLLER USES REST AS OPPOSED TO EXPRESS
import 'dotenv/config';
import express from 'express';
//import * as hikelog from './model.mjs';
import * as hikes from './model.mjs';

const PORT = process.env.PORT;
const app = express();

// REST needs json MIME type
app.use(express.json());

//CONTROLLERS
app.post('/hikes', (req, res) => {
    console.log(req, res);
    hikes.createHike(
        req.body.trail,
        req.body.distance,
        req.body.elevation,
        req.body.duration,
        req.body.date
    )

    .then(hike => {
        res.status(201).json(hike);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Hike creation failed.'})
    });
});

//READ using RESTs GET
app.get('/hikes', (req, res) => {
    hikes.findHike()
    .then(hike => {
        if (hike !== null) {
            res.json(hike);
        } else {
            res.status(404).json({Error: 'Hike not found.'});
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({Error: 'Request for hike failed.'})
    });
});

//UPDATE using RESTs PUT
app.put('/hikes/:id', (req, res) => {
    hikes.replaceHike(
        req.params.id,
        req.body.trail,
        req.body.distance,
        req.body.elevation,
        req.body.duration,
        req.body.date
    )
    .then(hike => {
        //if found, update
        res.json(hike);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({error: 'Request to update hike failed.'})
    });
});

//DELETE by ID
app.delete('/hikes/:_id', (req, res) => {
    hikes.deleteById(req.params._id)
        .then(deletedCount => {
            // delete at least 1
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({error: 'Hike does not exist to be deleted.'});
            }
        })
        .catch(error => {
            console.log(error);
            res.send({error: 'Request to delete failed.'});
        });
});

//REST and listen
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});