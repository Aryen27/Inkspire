import express from 'express';
import authRoutes from './routes/auth.route.js';
import 'dotenv/config'

const app = express();
const PORT = 5000;
app.use(express.json()); 

app.get('/', (req,res) => {
  res.send("Hello");
})

// app.use('blog', handleBlog);

app.use('/auth', authRoutes);

app.listen(PORT, 'localhost', () => {
  console.log("Server is running @ http://localhost:"+PORT);
});