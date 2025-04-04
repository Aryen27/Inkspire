import express from 'express';
import authRoutes from './routes/auth.route.js';
import blogRoutes from './routes/blog.route.js'
import userRoutes from './routes/user.routes.js'
import 'dotenv/config'

const app = express();
const PORT = 5000;
app.use(express.json()); 

app.get('/', (req,res) => {
  res.send("Hello");
})

// app.use('blog', handleBlog);

app.use('/auth', authRoutes);
app.use('/blog', blogRoutes);
app.use('/user', userRoutes);


app.listen(PORT, 'localhost', () => {
  console.log("Server is running @ http://localhost:"+PORT);
});