import React from 'react';

import {AppRouter} from './components/routers/AppRouter'
import { Provider } from 'react-redux';
import {store} from './components/store/store'


export const TodoApp = () => {

  return (
    <Provider store={store}>
       <AppRouter/>
    </Provider> 
  );
}
