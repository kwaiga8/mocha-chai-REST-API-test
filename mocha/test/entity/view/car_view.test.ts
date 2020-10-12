
import {expect} from 'chai';
import 'chai-http';
import * as chai from 'chai';
import {CarService} from "../../../src/services/entity/car/CarService";

chai.use(require('chai-http'));

const itParam = require('mocha-param').itParam;
const carService: CarService = new CarService();

const listOfSysId = ['300000416187', '90000001389', '970000001342', '610000001412'];

describe('Car Entity View', () => {
  itParam('Simple check - should return 200', listOfSysId, (done, sysID) => {
    carService.getCallForViewCarEntity(sysID)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        console.log(res.text);
        done();
      })
  });

  it('Structural check based on specific entity: FIAT- 303', (done) => {
    carService.getCallForViewCarEntity('270000001195')
      .end((err, res) => {
        expect(res).to.have.status(200);
        let FIAT = res.body.entity;
        expect(FIAT).to.exist;
        expect(FIAT).to.include.keys([
          '$sysId',
          '$type',
          '$typeCode',
          'carRefPointDescription',
          'carType',
          'cityName',
          'datumCode',
          'lastModUserId',
          'name',
          'userSysId',
          '$children'
        ]);
        console.log(res.text);
        done();
      });
  });

  it('Check if "flat" parameter set to "false" will return children', (done) => {
    carService.getCallForViewCarEntity('90000001389')
      .end((err, res) => {
        expect(res).to.have.status(200);
        let car = res.body.entity;
        expect(car.$children).to.exist;
        console.log(res.text);
        done();
      });
  });

  it('Check if "flat" parameter set to "false" will return children and will have proper structure for Car', (done) => {
    carService.getCallForViewCarEntity('90000001389')
      .end((err, res) => {
        expect(res).to.have.status(200);
        let car = res.body.entity;
        expect(car.$children).to.exist;
        expect(car.$children).to.include.keys([
          'carLights',
          'carTypeRelations',
          'telephones',
          'timeOfOperations'
        ]);
        expect(car.$children.carTypeRelations[0]).to.include.keys([
          '$type',
          '$typeCode',
          'affectedEntitySysId',
          'affectedEntityType',
          'carTypeClass',
          'lastModUserId',
          'lastUpdateTimestamp',
          'userSysId',
          'sysId'
        ]);
        console.log(res.text);
        done();
      });
  });


  it('Check if "flat" parameter set to "true" will NOT return children', (done) => {
    carService.getCallForViewCarEntity('90000001389', 'true')
      .end((err, res) => {
        expect(res).to.have.status(200);
        let car = res.body.entity;
        expect(car.$children).not.to.exist;
        console.log(res.text);
        done();
      });
  });


  it('Check values for specific entity: Car Nissan Juke', (done) => {
    carService.getCallForViewCarEntity('300000416187')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.$resultCode).to.eq(1);
        expect(res.body.$type).to.eq('readResult');
        expect(res.body.entity.$type).to.eq('Car');
        expect(res.body.entity.cityName).to.eq('Nissan Juke');
        expect(res.body.entity.$sysId).to.eq(300000416187);
        expect(res.body.entity.userSysId).to.eq(330000921621);
        expect(res.body.entity.$typeCode).to.eq(7);
        console.log(res.text);
        done();
      });
  });

});


