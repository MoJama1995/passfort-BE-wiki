const db  = require("../../../src/db/db");
const fs  = require("fs")

describe('db functions', () => {
  describe('getDocumentData', () => {
      beforeEach(() => {
          jest.mock('fs')
      });
      afterEach(() => {
         jest.clearAllMocks() 
      });
      it('returns a json obj and calls readfile', async () => {
         fs.promises.readFile = jest.fn().mockResolvedValue()
        JSON.parse = jest.fn().mockReturnValue({
            "testJson": 'TestObj'
        });
        const doc = await db.getDocumentData()  
        expect(fs.promises.readFile).toHaveBeenCalledTimes(1)
        expect(doc).toEqual({"testJson": "TestObj"})
      });
      it('throws an error when the file cant be read', async () => {
        // TODO
     });
  });
  describe('getDocData', () => {
    //TODO
  })
  describe('getRevisionByTimeStamps', () => {
   //TODO
  })
  describe('getDocument', () => {
    //TODO
   })
});