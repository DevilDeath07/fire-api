import Cracker from '../models/cracker.model.js';

// List all crackers
export const crackersIndex = async (req, res) => {
  try {
    const crackers = await Cracker.find();
    return res.status(200).json(crackers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


export const crackersCreate = async (req, res) => {
  //id, title, description, price, imageUrl
  //create a new cracker
  console.log(req.body);
  
  //validate your data
  const newcrackers = new Cracker ({
    id : req.body.id,
    title : req.body.title,
    price : req.body.price,
    imageUrl : req.body.imageUrl,
    category : req.body.category
  })
  //successful or error
  try {
    const movie = await newcrackers.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};


// Get cracker by ID
export const crackersGetById = async(req, res) => {
  try {
    const crackerId = req.params.id; // Example: /api/crackers/1

    // Find the cracker by the custom "id" field
    const cracker = await Cracker.findOne({ id: crackerId });

    if (!cracker) {
      return res.status(404).json({ message: 'Cracker not found' });
    }

    return res.status(200).json(cracker);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

};

//upadate cracker by ID
export const crackersUpdateById = async (req, res) => {
  //validate the request data
  try {
    const updatedcracker = await Cracker.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedcracker) {
      return res.status(404).json({ message: 'Cracker not found' });
    }
    return res.status(200).json(updatedcracker);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Delete cracker by ID
export const crackersDeleteById = async (req, res) => {
  try {
    const crackerId = req.params.id;
    const cracker = await Cracker.findOne({ id: crackerId });
    if (!cracker) {
      return res.status(404).json({ message: 'Cracker not found' });
    }
    await Cracker.deleteOne({ id: crackerId });
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

