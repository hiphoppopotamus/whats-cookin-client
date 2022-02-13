const API_BASE_URL_DEVELOPMENT = 'https://localhost:7102/api/';
// const API_BASE_URL_PRODUCTION = 'https://aspnetcorereacttutorial-aspnetserver.azurewebsites.net';

const ENDPOINTS = {
    REGISTER: 'register',
    LOGIN: 'login',
};

const development = {
    API_URL_REGISTER: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.REGISTER}`,
    API_URL_LOGIN: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.LOGIN}`,
};

const production = {
};

const Constants = process.env.NODE_ENV === 'development' ? development : production;

export default Constants;
