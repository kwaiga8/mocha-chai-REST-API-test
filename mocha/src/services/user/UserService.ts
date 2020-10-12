import {BackendService} from '../BackendService';
import {URL_OPERATE_ENDPOINT, URL_SEARCH_USER} from '../../envars';

export class UserService extends BackendService {

  getCallForOperationUser(userSysId: string, sessionid = 'test1723') {
    return this.defaultGetRequest(URL_OPERATE_ENDPOINT
      .replace('{userSysId}', userSysId))
      .query({
        [56]: sessionid
      });
  }

  getCallForSearchForuser(userId: string, userName: string) {
    return this.defaultGetRequest(URL_SEARCH_USER
      .replace('{userId}', userId)
      .replace('{userName}', userName))
  }
}
