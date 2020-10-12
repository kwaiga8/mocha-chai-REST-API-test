import {EffectivityContext, PayLoad, Query} from '../payload_dtos/PayLoad';
import {EffectivityContextBuilder} from '../payload_dtos/EffectivityContextBuilder';
import {PayLoadBuilder} from '../payload_dtos/PayLoadBuilder';
import {QueryUserBuilder} from '../payload_dtos/QueryUserBuilder';

export class UserFixture {


  newUser(userName: string = '', userId: string = '', chunkingSize: string = '1'): PayLoad {

    let efContext: EffectivityContext = new EffectivityContextBuilder().setAsOfDate(new Date()).setEffectiveDate(new Date()).build();

    let values: Query = new QueryUserBuilder().setBIncDeleted('1').setUserName(userName).setOpenedUserId(userId).setChunkingSize(chunkingSize)
      .build();

    return new PayLoadBuilder().setEffectivityContext(efContext).setQuery(values).setSearchType('DynamicUserSearch').build();

  }


}
