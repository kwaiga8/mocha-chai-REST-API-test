import {Query} from './PayLoad';

export class QueryBuilder implements Partial<Query> {

  bIncDeleted?: string;
  chunkingSize?: string;
  flexappid?: string;
  ident?: string;


  setBIncDeleted(value: string) {
    return Object.assign(this, {bIncDeleted: value});
  }


  setChunkingSize(value: string) {
    return Object.assign(this, {chunkingSize: value});
  }

  setFlexappid(value: string) {
    return Object.assign(this, {flexappid: value});
  }

  setIdent(value: string) {
    return Object.assign(this, {ident: value});
  }

  build(this: Query) {
    return new Query(this);
  }

}
