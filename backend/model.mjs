import mongoose from 'mongoose';
import 'dotenv/config';

//connect to mongoose using .env parameters
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    {useNewUrlParser: true}
);

//confirm connection is successful
const database = mongoose.connection;

database.once("open", (err) => {
    if (err){
        res.status(500).json({error: '500 : Server connection failure'});
    } else{
        console.log('Connected to Hike Log via MongoDB')
    }
});

//min: [0, 'Too fast! Enter a postive number...']},
//schema
const hikeSchema = mongoose.Schema({
    trail: {type: String, required: true},
    distance: {type: Number, required: true},
    elevation: {type: Number, required: true},
    duration: {type: Number, required: true},
    date: { type: Date, required: true, default: Date.now}
});

//compile model from the schema
const Hike = mongoose.model("Hike", hikeSchema);

//BEGIN MODELS

//CREATE a hike in the collection
const createHike = async (trail, distance, elevation, duration, date) => {
    //call constructor to create instance of model class Hike
    const hike = new Hike({
        trail: trail,
        distance: distance,
        elevation: elevation,
        duration: duration,
        date: date
    });

    //save to persist object as doc in mongoDB
    return hike.save();
}

//FIND
const findHike = async () => {
    const search = Hike.find();
    return search.exec();
}

const findHikeByID = async (_id) => {
    const search = Hike.findById(_id);
    return search.exec();
}

//REPLACE
const replaceHike = async(id, trail, distance, elevation, duration, date) => {
    const answer = await Hike.replaceOne({_id: id}, {
        trail: trail,
        distance: distance,
        elevation: elevation,
        duration: duration,
        date: date
    });
    return {
        id: id,
        trail: trail,
        distance: distance,
        elevation: elevation,
        duration: duration,
        date: date
    }
}

//DELETE
const deleteById = async (_id) => {
    const answer = await Hike.deleteOne({_id: _id});
    return answer.deletedCount;
};

export {createHike, findHike, findHikeByID, replaceHike, deleteById}