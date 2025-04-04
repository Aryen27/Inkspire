import express from 'express';
import connectionCred from '../db/connection.js';
import mysql from 'mysql2/promise';

const router = express.Router();

const connection = connectionCred;


export default router;