const request = require('supertest');
const app = require('../index');

// describe('GET / ', function(){
//     it('respond with hello world', function(done){

//         console.log("11111");
//         request(app).get('/').expect('hello world', done);
//     })
// })

describe('GET /', () => {
    it('Respond with hello world', (done) => {

        //navigate to root and check the response is "Hello world"
        request(app).get('/').expect('hello world', done);
    })
})