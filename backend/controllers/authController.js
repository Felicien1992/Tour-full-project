import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// user registration
export const register = async (req, res) => {
  try {
    //hashing password
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    })

    await newUser.save()

    res.status(200).json({ success: true, message: 'successfully created' })
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: 'failed to create. Try aigain' })
  }
}

// user login
export const login = async (req, res) => {
  const email = req.body.email

  try {
    const user = await User.findOne({ email })

    // if user doesn't exist
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }

    // if user is exist then check password or compare the password
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // if password is incorrect
    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: 'incorrect email or password' })
    }

    const { password, role, ...rest } = user._doc

    // create jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '15d' }
    )

    // set token in the browser cookies and send the response to the client
    res
      .cookie('accessToken', token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({ token, data: { ...rest },
      role,
    });

  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to login' })
  }
}
