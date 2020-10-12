import {EntityService} from '../EntityService';


export class CarService extends EntityService {

  getCallForViewCarEntity(sysId: string, flat: string = 'false') {
    return this.getCallForViewEntity(sysId, 'Car', flat);
  }
}
