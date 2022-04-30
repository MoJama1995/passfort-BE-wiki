const express  = require("express");
const db  = require("../db/db.js.js")

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
      res.status(501).json({ message: 'Not Implemented' });
    } catch (err) {
      return next(err);
    }
  });
  
  router.get('/:title/latest', async (req, res, next) => {
    try {
      res.status(501).json({ message: 'Not Implemented' });
    } catch (err) {
      return next(err);
    }
  });
  
  router.get('/:title/:timestamp', async (req, res, next) => {
    try {
      res.status(501).json({ message: 'Not Implemented' });
    } catch (err) {
      return next(err);
    }
  });
  

module.exports = router
