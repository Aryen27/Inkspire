import jwt from 'jsonwebtoken'
import { promisify } from 'util'

export const protect= async (req,res,next)=> {
  /*
  1. Get token & check if it is present
  2. Validate token
  3. Check if user exists
  4. Check if user changed pw after jwt was issued- To be implemented later
  */
  console.log(req.headers);
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'Please login to get access' });
  }

  let decoded;
  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(403).json({ message: err });
  }
    const uid = decoded.id; 

  // Async by default
  let user;
  try {
    const [results, fields] = await connection.query('SELECT * FROM `users` WHERE uid=?', [uid]);
    console.log(results);
    if (results.length == 0) {
      return res.status(404).json({ message: 'User not found!. Try logging in again' });
    }
    user = results[0];
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }

  // Granting Access to routes
  next();
}

export const partialProtect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer')) {
    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
    } catch (err) {
      req.user = null;
    }
  } else {
    req.user = null;
  }

  next();
}