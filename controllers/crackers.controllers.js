import Cracker from '../models/cracker.model.js';

// List all crackers
export const crackersIndex = (req, res) => {
  res.send('List of all crackers');
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
    imageUrl : req.body.imageUrl
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
export const crackersGetById = (req, res) => {
  res.send('Getting a single cracker by ID');
};

// Delete cracker by ID
export const crackersDeleteById = (req, res) => {
  res.send('Deleting a single cracker by ID');
};
