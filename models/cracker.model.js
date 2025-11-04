import {model, Schema} from 'mongoose';
//write the schema
const crackerSchema = new Schema({
    id:        { type: Number, required: true, unique: true },
    title:     { type: String, required: true, unique: true }, // corresponds to Itemname
    price:     { type: Number, required: true }, // remove "Rs." and store as a number
    imageUrl:  { type: String, required: true }, // corresponds to ItemImage
    category:  { type: String, required: true }  // store the category (e.g., "Sound Crackers")
});

//create the model
const Cracker = model('Cracker', crackerSchema);
export default Cracker;