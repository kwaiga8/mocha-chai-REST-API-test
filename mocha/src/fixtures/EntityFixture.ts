import {EffectivityContext, PayLoad, Query} from '../payload_dtos/PayLoad';
import {EffectivityContextBuilder} from '../payload_dtos/EffectivityContextBuilder';
import {QueryBuilder} from '../payload_dtos/QueryBuilder';
import {PayLoadBuilder} from '../payload_dtos/PayLoadBuilder';


export class EntityFixture {


  newEntity(entityType: string, asOfDate: any = new Date(), effectiveDate: any = new Date()): PayLoad {

    let efContext: EffectivityContext = new EffectivityContextBuilder().setAsOfDate(asOfDate).setEffectiveDate(effectiveDate).build();

    let values: Query = new QueryBuilder().setBIncDeleted('1').setChunkingSize('1').build();

    return new PayLoadBuilder().setEffectivityContext(efContext).setQuery(values).setSearchType(entityType).build();

  }


}
