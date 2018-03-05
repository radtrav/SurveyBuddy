import axios from 'axios';
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  HANDLE_STRIPE_TOKEN_REQUEST,
  HANDLE_STRIPE_TOKEN_SUCCESS,
  HANDLE_STRIPE_TOKEN_FAILURE,
  SUBMIT_SURVEY_REQUEST,
  SUBMIT_SURVEY_SUCCESS,
  SUBMIT_SURVEY_FAILURE,
  FETCH_SURVEYS_REQUEST,
  FETCH_SURVEYS_SUCCESS,
  FETCH_SURVEYS_FAILURE,
} from './types';
import { FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
  try {
    dispatch({ type: FETCH_USER_REQUEST });
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_USER_FAILURE, payload: err });
  }
};

export const handleToken = token => async dispatch => {
  try {
    dispatch({ type: HANDLE_STRIPE_TOKEN_REQUEST });
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: HANDLE_STRIPE_TOKEN_SUCCESS });
    dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: HANDLE_STRIPE_TOKEN_FAILURE, payload: err });
  }
};

export const submitSurvey = (values, history) => async dispatch => {
  try {
    dispatch({ type: SUBMIT_SURVEY_REQUEST });
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: SUBMIT_SURVEY_SUCCESS });
    dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: SUBMIT_SURVEY_FAILURE, payload: err });
  }
};

export const fetchSurveys = () => async dispatch => {
  try {
    dispatch({ type: FETCH_SURVEYS_REQUEST });
    const res = await axios.get('/api/surveys');
    dispatch({ type: FETCH_SURVEYS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_SURVEYS_FAILURE, payload: err });
  }
};
