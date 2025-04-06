import express from 'express';
import mysql from 'mysql2/promise';
import connectionCred from '../db/connection.js';
import jwt from 'jsonwebtoken'
import { promisify } from 'util'
import { protect, partialProtect } from '../middleware/protectRoutes.js';

const router = express.Router();

const connection = connectionCred;

// ROUTES
router.get('/', async (req, res) => {
  /*
  1. Get all the blogs from database
  2. Sort the blogs by newest first
  3. Display blogs in a grid of 4 for lg-vp & 1 form sm-vp & 2 for md-vp
  */
  try {
    const [results, fields] = await connection.query('SELECT * FROM blogs ORDER BY updatedAt DESC');

    res.status(200).json({ data: results });
  } catch (err) {
    console.error('Error getting blog data:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }

})


router.get('/:id', partialProtect, async (req, res) => {
  /*
  1. Get the id from request params
  2. Get the blog from the given id from db
  3. Check if user is logged in
  4. Show author if logged in and vice versa
  */
  
  // Get blog from database
  const blogId = req.params.id;

  try {
    const [results, fields] = await connection.query('SELECT b.*, u.name FROM blogs b INNER JOIN users u WHERE b.authorid=u.uid AND b.bid=?', [blogId]);

    if (results.length == 0)
      return res.status(400).json({ sucess: false, message: 'Blog doesn\'t exist' });
    
    if (req.user == null) {
      results[0].authorid = null;
      results[0].name = null;
    }
    const blog = results;
    return res.status(200).json({ data: blog });
  } catch (err) {
    console.error('Error getting blog by id:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }

})


router.post('/', protect, async (req, res) => {
  /*
  1. Check if user has logged in.
  2. Add blog post to database.
  */
  
  // Adding blog to database
  const { authorid, title, content } = req.body;

  try {
      // Check if a similar blog already exists
  let [results, fields] = await connection.query('SELECT * FROM blogs WHERE title=? AND authorid=?', [title, authorid]);
  if (results.length != 0)
    return res.status(400).json({ message: 'A similar blog already exists!' });

  [results, fields] = await connection.query('INSERT INTO blogs(title, content, authorid) VALUES(?, ?, ?)', [title, content, authorid]);
  console.log(results);
  if (results.serverStatus != 2)
    return res.status(500).json({ message: 'There was an issue processing your request' });

  return res.status(200).json({ message: 'Your blog has been added successfully' });
  } catch (err) {
    console.error('Error posting a blog:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }

})

router.delete('/:id', protect, async (req, res) => {
  const bid = req.params.id;
  try {
    const [results, fields] = await connection.query('DELETE FROM blogs WHERE bid=?', [bid]);
    console.log(results);
  
    if (results.affectedRows == 0)
      return res.status(500).json({ message: 'There was an issue processing your request' });
  
    return res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error('Error deleteing blog:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }


})

router.patch('/:id', async (req, res) => {
  const bid = req.params.id;
  const { title, content } = req.body;

  try {
    const[results, fields] = await connection.query('UPDATE blogs set title=?, content=? WHERE bid=?', [title, content, bid]);

    if (results.affectedRows == 0)
      return res.status(404).json({ message: 'Blog not found or no change detected' });
  
    return res.status(200).json({ message: 'Blog has been updated successfully' });
  } catch (err) {
    console.error('Error updating blog:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
})

export default router;