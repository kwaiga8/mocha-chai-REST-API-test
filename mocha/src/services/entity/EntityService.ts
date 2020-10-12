import {BackendService} from '../BackendService';
import {URL_ENTITY} from '../../envars';
import {PayLoad} from '../../payload_dtos/PayLoad';

export class EntityService extends BackendService {
  public date = '12-Dec-2020%2010:48:44';
  public asOfDate = this.date;
  public effectiveDate = this.date;

  postSearchEntity(url: string, body: PayLoad) {
    return this.defaultPostRequest(url)
      .send((JSON.stringify(body)));
  }


  getCallForViewEntity(sysId: string, entityType: string, flat: string = 'true') {
    return this.defaultGetRequest(URL_ENTITY.replace('{entity}', entityType).replace('{sysId}', sysId))
      .query({
        [12]: this.asOfDate,
        [122]: this.effectiveDate,
        [1234]: flat
      });
  }


}
