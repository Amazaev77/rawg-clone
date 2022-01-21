import React, { FC } from 'react';
import Header from './components/Header/Header';
import './index.scss';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App: FC = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default App;
