import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

export const setToken = token => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const { data } = await authInstance.post('/users/signup', formData);
      /*
      {user: {…}, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N…0OTh9._UwlJpkzE0960OH1bndazZYg1Tdv2cYX-TepY_NPL8I'}
          token: 
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzJlMTVkYWM0OTVlZDZlMjVmMzhlZjciLCJpYXQiOjE3MzEwNzM0OTh9._UwlJpkzE0960OH1bndazZYg1Tdv2cYX-TepY_NPL8I"
          user: {name: 'sada', email: 'sada1@ux.ua'}
       */

      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const { data } = await authInstance.post('/users/login', formData);
      /*
      {user: {…}, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N…2MDB9.8XAlg0LBKzo03TP-ZDstvKLQdemXz9Si3-83PTqmQAE'}
        token: 
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzJlMTVkYWM0OTVlZDZlMjVmMzhlZjciLCJpYXQiOjE3MzEwNzM2MDB9.8XAlg0LBKzo03TP-ZDstvKLQdemXz9Si3-83PTqmQAE"
        user: {name: 'sada', email: 'sada1@ux.ua'}
       */
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setToken(token);
    await authInstance.post('/users/logout');
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue('No token provided to refresh user');
    }

    try {
      setToken(token);
      const { data } = await authInstance.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
