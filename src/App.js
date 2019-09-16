import React from 'react';
import './App.css';
import Background from './Components/Paper'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './Reducers/index'
import thunk from 'redux-thunk'

function App() {
  const Store = createStore(Reducer,compose(applyMiddleware(thunk),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))
    
  return (
    <Provider store={Store}>
      
      <div className="App">
        <Background>

        </Background>
      </div>
      
    </Provider>
  );
}

export default App;
