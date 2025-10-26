// controllers/crackers.controllers.js

// List all crackers
export const crackersIndex = (req, res) => {
  res.send('List of all crackers');
};


export const crackersCreate = (req, res) => {
  //id, title, description, price, imageUrl
  //create a new cracker
  console.log(req.body);
  return res.json(req.body);
  
};


// Get cracker by ID
export const crackersGetById = (req, res) => {
  res.send('Getting a single cracker by ID');
};

// Delete cracker by ID
export const crackersDeleteById = (req, res) => {
  res.send('Deleting a single cracker by ID');
};
