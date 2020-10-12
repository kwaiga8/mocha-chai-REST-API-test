import { EntityService } from '../../../src/services/entity/EntityService';
import { expect } from 'chai';
import 'chai-http';
import * as chai from 'chai';
import {EntityFixture} from '../../../src/fixtures/EntityFixture';

chai.use(require('chai-http'));

const entitySearchService: EntityService = new EntityService();
const entityFixture: EntityFixture = new EntityFixture();
const itParam = require('mocha-param').itParam;

let simpleCar = entityFixture.newEntity('DynamicCarSearch');


describe('Entity Search', () => {
  it('Very simple check based on Car - should return 200', (done) => {
    entitySearchService.postSearchEntity('search', simpleCar)
      .end((err, res) => {
        console.log(JSON.stringify(simpleCar));
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        console.log(res.text);
        done();
      })
  });


  it('Invalid timestamp context- lack of asOfDate - should return 460', (done) => {
    let carWithoutAsODate = entityFixture.newEntity('DynamicCarSearch',' ', );
    entitySearchService.postSearchEntity('search', carWithoutAsODate)
      .end((err, res) => {
        console.log(JSON.stringify(carWithoutAsODate));
        expect(err, 'FAILED DO NOT HAVE 460 STATUS').to.have.status(460);
        expect(err.rawResponse, 'FAILED Message response is invalid').to.equal('Missing obligatory parameters. Invalid asOfDate.');
        console.log(err);
        done();
      })
  });


});
