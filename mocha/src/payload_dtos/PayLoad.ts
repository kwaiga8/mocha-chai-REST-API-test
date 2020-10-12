export interface EffectivityContext {
  asOfDate?: Date;
  effectiveDate?: Date;
}

export class EffectivityContext implements EffectivityContext {
  constructor(dates: EffectivityContext) {
    Object.assign(this, dates)
  }
}

export interface Query {
  deleted?: string;
  chunkingSize?: string;
  id?: string;
  ident?: string;
  name?: string;
  openedUserId?: string
}

export class Query implements Query {
  constructor(queryParams: Query) {
    Object.assign(this, queryParams)
  }
}

export interface PayLoad {
  effectivityContext?: EffectivityContext;
  searchType?: string;
  query?: Query;
}

export class PayLoad implements PayLoad {
  constructor(bodyValues: PayLoad) {
    Object.assign(this, bodyValues)
  }
}

