const request  = require('supertest');
const { mockArticle }  = require('../../mockData');
const db  = require('../../../src/db/db')
const app  = require('../../../app')

describe('documents routes', () => {
    describe('/:title/latest', () => {
        //TODO
    });
    describe('/:title/:timestamp', () => {
        it('returns an article obj ', async () => {
            db.getRevisionByTimeStamp = jest.fn().mockResolvedValue()
            db.getDocument = jest.fn().mockResolvedValue(mockArticle)
            
            return request(app)
             .get('/documents/title1/0000000')
             .expect(200)
             .then(res => {
                 expect(res.body).toEqual({
                     success: true,
                     data: mockArticle 
                 })
             })
        });
        it('should return 500 in case of errors', () => {
            db.getRevisionByTimeStamp = jest.fn().mockImplementation(() => {throw new Error('oopsie')})

            return request(app)
            .get('/documents/title1/0000000')
            .expect(500)
            .then(res => {
                expect(res.body).toEqual({
                    message: 'oopsie'
                })
            })
        });
    });
});