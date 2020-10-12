import {UserService} from '../../../src/services/user/UserService';
import {expect} from 'chai';
import 'chai-http';
import 'chai-string';
import 'chai-arrays';
import * as chai from 'chai';
import {EntityService} from '../../../src/services/entity/EntityService';
import {UserFixture} from '../../../src/fixtures/UserFixture';

chai.use(require('chai-arrays'));
chai.use(require('chai-http'));
chai.use(require('chai-string'));

const userService: UserService = new UserService();

const entitySearchService: EntityService = new EntityService();
const userFixture: UserFixture = new UserFixture();

describe('user search', () => {
  // OLD on 8111 it is done also via POST method

  it('Simple check - should return 200', (done) => {
    userService.getCallForSearchForuser('fidposp', 'TEST_user_AZ_T_1_0')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.$type).to.eq('searchResult');
        console.log(res.text);
        done();
      })
  });


  it('Basic structure check for user', (done) => {
    let newUser = userFixture.newUser('J', '', '6');
    entitySearchService.postSearchEntity('search', newUser)
      .end((err, res) => {
        console.log(JSON.stringify(newUser));
        let randomUser = res.body.results[0];
        expect(res).to.have.status(200);
        expect(newUser).to.exist;
        expect(randomUser).to.have.all.keys([
          '$sysId',
          '$type',
          'currentUserId',
          'effectiveTimestamp',
          'groupOfUsersName',
          'groupOfUsersSysId',
          'openedUserId',
          'carClassType',
          'carDescription',
          'userMode',
          'userName',
          'userStatus',
        ]);
        console.log(res.text);
        done();
      })
  });

  it('Check filtering based on user name, there should beuserss filtered with starting on letter S', (done) => {
    let newUser = userFixture.newUser('S', '', '6');
    entitySearchService.postSearchEntity('search', newUser)
      .end((err, res) => {
        console.log(JSON.stringify(newUser));
        for (let n in res.body.results) {
          expect(res.body.results[n].userName, 'FAILED FOR: ' + res.body.results[n].userName).to.startWith('S');
        }
        console.log(res.text);
        done();
      })
  });

  it('Check filtering on user name, should return only user1 users', (done) => {
    let newUser = userFixture.newUser('', 'user1', '10');
    entitySearchService.postSearchEntity('search', newUser)
      .end((err, res) => {
        console.log(JSON.stringify(newUser));
        for (let n in res.body.results) {
          expect(res.body.results[n].openedUserId, 'FAILED FOR: ' + res.body.results[n]).to.equal('user1');
        }
        console.log(res.text);
        done();
      })
  });

});
