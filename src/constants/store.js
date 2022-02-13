export const SERVER_URL = process.env.NODE_ENV !== 'production' ? 'http://localhost/ag_api' : '{SOME_API_PATH}';
export const DEFAULT_ACTION_RESULT = {
  type: '',
  loading: false,
  status: false,
  message: '',
};
