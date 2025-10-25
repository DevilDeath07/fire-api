// controllers/crackers.controllers.js

// List all crackers
export const crackersIndex = (req, res) => {
  res.send('List of all crackers');
};


// controllers/crackers.controllers.js (must include .js extension if using ESM)
export const crackersCreate = (req, res) => {
  res.send('Creating a new cracker');
};


// Get cracker by ID
export const crackersGetById = (req, res) => {
  res.send('Getting a single cracker by ID');
};

// Delete cracker by ID
export const crackersDeleteById = (req, res) => {
  res.send('Deleting a single cracker by ID');
};
