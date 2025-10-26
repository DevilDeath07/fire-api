import {model, Schema} from 'mongoose';
//write the schema
const crackerSchema = new Schema ({
    id: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true }
})

//create the model
const Cracker = model('Cracker', crackerSchema);
export default Cracker;