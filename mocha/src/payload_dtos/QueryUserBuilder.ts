import {QueryBuilder} from './QueryBuilder';


export class QueryUserBuilder extends QueryBuilder {

  openedByUserId?: string;
  name?: string;

  setOpenedUserId(value: string) {
    return Object.assign(this, {openedByUserId: value});
  }

  setUserName(value: string) {
    return Object.assign(this, {name: value});
  }

}
