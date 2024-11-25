import React from 'react';
import { Provider } from 'react-redux';
import Board from './components/Board';
import { store } from './redux/Store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          textAlign: 'center',
        }}
      >
        <h1 style={{ marginBottom: '20px', color: 'white' }}>Chess Board</h1>
        <Board />
      </div>
    </Provider>
  );
};


export default App;
