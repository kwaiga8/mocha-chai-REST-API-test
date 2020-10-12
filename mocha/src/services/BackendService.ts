import {BASE_URL} from '../envars';

const chai = require('chai');

export class BackendService {

  private getBaseUrl(param) {
    let testRequest = chai.request(BASE_URL).get(param);
    console.log(testRequest.url);
    return testRequest;
  }

  private postBaseUrl(param) {
    let testRequest = chai.request(BASE_URL).post(param);
    console.log(testRequest.url);
    return testRequest;
  }

  defaultGetRequest(param: string) {
    return this.setParameters(this.getBaseUrl(param));
  }

  defaultPostRequest(param: string) {
    return this.setParameters(this.postBaseUrl(param));
  }

  private setParameters(req) {
    return req
      .set('Accept-Language', 'pl,en-US;q=0.7,en;q=0.3')
      .set('Accept-Encoding', 'gzip, deflate')
      .set('Referer', 'http://localhost:4200/')
      .set('Authorization', 'Basic amku')
      .set('Origin', 'http://localhost:4200')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json, text/plain, */*')
      .set('cache-control', 'no-cache')
      .set('Postman-Token', 'nie znam');
  }
}
