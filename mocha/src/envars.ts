require('dotenv').config({path: 'mocha/.env'});

  export const BASE_URL: string = process.env.URL;
  export const URL_ENTITY: string = 'entity/{entity}/{sysId}/';
  export const URL_SEARCH: string = 'search/';
  export const URL_SEARCH_USER: string = URL_SEARCH + '/user';
  export const URL_OPERATE_ENDPOINT: string = 'operation/user/{userSysId}/';