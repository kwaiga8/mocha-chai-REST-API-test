import {EffectivityContext} from './PayLoad';

export class EffectivityContextBuilder implements Partial<EffectivityContext> {

  asOfDate?: Date;
  effectiveDate?: Date;

  setAsOfDate(value: Date): this {
    return Object.assign(this, {asOfDate: value});
  }

  setEffectiveDate(value: Date): this {
    return Object.assign(this, {effectiveDate: value});
  }

  build(this: EffectivityContext) {
    return new EffectivityContext(this);
  }

}
