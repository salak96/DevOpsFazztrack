//import database from '../src/database';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index')

chai.use(chaiHttp);
chai.should();

describe("UNTUK MENGETES USER", () => {
    describe("GET/api/v1/users", () => {
        it("Mendapat Semua Data User", (done) => {
            chai.request(app)
                .get('api/v1')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
        // Test to get single student record
        it("Mendapatkan Data User By ID", (done) => {
            const id = 4;
            chai.request(app)
                .get(`/api/v1/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        // Test to get single student record
        it("Tidak Mendapatkan Data User By ID", (done) => {
            const id = 5;
            chai.request(app)
                .get(`api/v1/${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
});
