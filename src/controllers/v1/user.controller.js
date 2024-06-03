exports.getAllUsers = (req, res) => {
    // Logic to get all users
    console.log('Get all users - v1');
    res.send('Get all users - v1');
  };
  
  exports.getUserById = (req, res) => {
    // Logic to get user by ID
    res.send(`Get user by ID - v1: ${req.params.id}`);
  };
  
  exports.createUser = (req, res) => {
    // Logic to create a new user
    res.send('Create new user - v1');
  };
  
  exports.updateUser = (req, res) => {
    // Logic to update user
    res.send(`Update user - v1: ${req.params.id}`);
  };
  
  exports.deleteUser = (req, res) => {
    // Logic to delete user
    res.send(`Delete user - v1: ${req.params.id}`);
  };
  