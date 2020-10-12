import {EffectivityContext, PayLoad, Query} from './PayLoad';

export class PayLoadBuilder implements Partial<PayLoad> {

  effectivityContext?: EffectivityContext;
  searchType?: string;
  query?: Query;

  setEffectivityContext(value: EffectivityContext): this {
    return Object.assign(this, {effectivityContext: value});
  }

  setSearchType(value: string): this {
    return Object.assign(this, {searchType: value});
  }

  setQuery(value: Query): this {
    return Object.assign(this, {query: value});
  }

  build(this: PayLoad) {
    return new PayLoad(this);
  }

}
