const util  = require('../../src/utils')
const {mockRevisions, mockTimeStamp} = require("../mockData")

describe('utils', () => {
    describe('getRevAtTheTime', () => {
        it('should return the timestamp for the revision at that time, when a timestamp is passed in as a parameter', () => {
            const data = util.getRevAtTheTime(mockTimeStamp, mockRevisions)
            expect(data).toEqual(1585306777)
        });
        it('should return null if the timestamp is before the revisions ', () => {
            const data = util.getRevAtTheTime(0, mockRevisions)
            expect(data).toEqual(null)
        });
    });
});
