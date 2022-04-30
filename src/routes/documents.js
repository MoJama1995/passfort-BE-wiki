const express  = require("express");
const db  = require("../db/db.js")

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
      const { title } = req.params;
      const revision = await db.getRevisionByTimeStamp(title);
      const document = await db.getDocument(title, revision);
      return res.status(200).json({
        success: true,
        data: document
      });
    } catch (err) {
      return next(err);
    }
  });
  
  router.get('/:title/:timestamp', async (req, res, next) => {
    try {
      const { title, timestamp } = req.params;
      let document; 
      const revision = await db.getRevisionByTimeStamp(title, timestamp);
      // if there are no revs available, return 404? else fetch doc and return 200 with data
      if (revision === null) { 
        return res.status(404).json({
          success:true, 
          data : 'no content available for that time'
      })}
      else {
        document = await db.getDocument(title, revision)
        return res.status(200).json({
          success: true,
          data: document
      })}
    } catch (err) {
      return next(err);
    }
  });
  

module.exports = router
