import {model, Schema} from 'mongoose';
//write the schema
const crackerSchema = new Schema ({
    id: { type: String, required: true },
    title: { type: String, required: true , unique: true },
    price: { type: Number, required: true , unique: false },
    imageUrl: { type: String, required: true, unique: false }
})

//create the model
const Cracker = model('Cracker', crackerSchema);
export default Cracker;