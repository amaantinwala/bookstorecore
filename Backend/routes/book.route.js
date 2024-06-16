// import express from 'express';
const express = require('express');
// import { getBook } from '../controller/book.controller';
const getBook = require('../controller/book.controller.js');
const router = express.Router();



module.exports = router.get("/",getBook);