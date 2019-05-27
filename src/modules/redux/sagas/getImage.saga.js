import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getImage() {
    try {
      const imageResponse = yield axios.get(`/image`);
      console.log('FROM THE SAGA', imageResponse);
      yield put({
        type: 'SET_IMAGE',
        payload: imageResponse.data
      })
    } catch (err) {
      console.log('error HELP:', err)
    }
  }

export default getImage;