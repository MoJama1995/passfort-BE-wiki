const fs  = require('fs')
const path  = require('path');
const { getRevAtTheTime }  = require('../utils.js');

//db file, all functions that interact directly with a db - in this case the json document and the txt.files that hold the articles

//async function to load dynamic jsonData
const getDocumentData = async () => {
  const docDataJson = path.resolve("data/documentData.json");
  try {
    const data = await fs.promises.readFile(docDataJson);
    return JSON.parse(data);
  } catch (err) {
    return err.message;
  }
};

const getTitles = async () => {
    try {
      const docData = await getDocumentData();
      return docData.map(doc => doc.Title)
    } catch (error) {
      return error
    }
  };

const getDocDataByTitle = async title => {
  try {
    const docData = await getDocumentData();
    return docData.find(data => data.Title === title);
  } catch (error) {
    return error
  }
};

//gets the title and the most recent revision at the time
// if no timestamp passed in, then will use current date.
const getRevisionByTimeStamp = async (
  title,
  timestamp = Math.floor(Date.now() / 1000)
) => {
  try{
    const docTitle = await getDocDataByTitle(title);
    const revisionsByTitle = docTitle.Revisions;
    return getRevAtTheTime(timestamp, revisionsByTitle);
  } catch(err) {
    return err
  }
};

//Function to fetch txt that holds the actual document by title and timestamp
const getDocument = async (title, timestamp) => {
  try {
    const pathLocation = path.resolve(`data/${title}/${timestamp}.txt`);
    const data = await fs.promises.readFile(pathLocation, {
      encoding: "utf8"
    });
    return data;
  } catch (error) {
    throw new Error("Error Reading File");
  }
};

module.exports ={ getDocumentData, getRevisionByTimeStamp, getDocument, getDocDataByTitle, getTitles };
