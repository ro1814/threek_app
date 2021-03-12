import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public Route
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      nombre: user.nombre,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc Register a new User
// @route POST /api/users/
// @access Public Route
const registerUser = asyncHandler(async (req, res) => {
  const {
    nombre,
    email,
    password,
    avatar,
    primApellido,
    segApellido,
    genero,
    fecNac,
    dni,
    direccion,
    city,
    postalCode,
    country,
  } = req.body;

  const userExits = await User.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    nombre,
    email,
    password,
    avatar,
    primApellido,
    segApellido,
    genero,
    fecNac,
    dni,
    direccion,
    city,
    postalCode,
    country,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      nombre: user.nombre,
      avatar: user.avatar,
      primApellido: user.primApellido,
      segApellido: user.segApellido,
      genero: user.genero,
      fecNac: user.fecNac,
      dni: user.dni,
      direccion: user.direccion,
      city: user.city,
      postalCode: user.postalCode,
      country: user.country,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
      res.status(400)
      throw new Error('Invalid user data')
  }
});

// @desc GET user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      nombre: user.nombre,
      avatar: user.avatar,
      primApellido: user.primApellido,
      segApellido: user.segApellido,
      genero: user.genero,
      fecNac: user.fecNac,
      dni: user.dni,
      direccion: user.direccion,
      city: user.city,
      postalCode: user.postalCode,
      country: user.country,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
})

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.nombre = req.body.nombre || user.nombre
    user.email = req.body.email || user.email
    user.primApellido = req.body.primApellido || user.primApellido
    user.segApellido = req.body.segApellido || user.segApellido
    user.genero = req.body.genero || user.genero
    user.fecNac = req.body.fecNac || user.fecNac
    user.dni = req.body.dni || user.dni
    user.direccion = req.body.direccion || user.direccion
    user.city = req.body.city || user.city
    user.postalCode = req.body.postalCode || user.postalCode
    user.country = req.body.country || user.country

    if(req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      nombre: updatedUser.nombre,
      avatar: updatedUser.avatar,
      primApellido: updatedUser.primApellido,
      segApellido: updatedUser.segApellido,
      genero: updatedUser.genero,
      fecNac: updatedUser.fecNac,
      dni: updatedUser.dni,
      direccion: updatedUser.direccion,
      city: updatedUser.city,
      postalCode: updatedUser.postalCode,
      country: updatedUser.country,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { authUser, getUserProfile, registerUser, updateUserProfile };
