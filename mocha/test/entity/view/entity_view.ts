import {EntityService} from '../../../src/services/entity/EntityService';

const entitySearchService: EntityService = new EntityService();

//TODO: replace when post method wil be implemented
describe('Entity view', () => {
  it('Simple entity view  example - parking  - should return 200', (done) => {
    entitySearchService.getCallForViewEntity('Parking', '950000841999')
      .end((err, res) => {
        done();
      })
  });
});


