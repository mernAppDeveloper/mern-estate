import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
  //console.log(req.body);
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    const saveUser = await newUser.save();
    res.status(201).json({
      data: saveUser,
      message: 'User created successfully!',
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: 'fails',
      success: false,
      error: true,
    });
  }
};
