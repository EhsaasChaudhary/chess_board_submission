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
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh', // Full height of the viewport
          margin: '0',
        }}
      >
        <h1 style={{ marginBottom: '20px' }}>Chess Board</h1>
        <Board />
      </div>
    </Provider>
  );
};

export default App;
