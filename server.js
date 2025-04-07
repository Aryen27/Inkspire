import express from 'express';
import authRoutes from './routes/auth.route.js';
import blogRoutes from './routes/blog.route.js'
import userRoutes from './routes/user.routes.js'
import 'dotenv/config'
import cors from 'cors'

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

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