import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Edit from './components/Edit';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='main'>
          <div className='header'>
            <Header />
          </div>
          <div className='form'>
            <Form />
          </div>
          <Switch>
            <Route exact path='/' component={List} />
            <Route exact path='/edit/:id' component={Edit} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
