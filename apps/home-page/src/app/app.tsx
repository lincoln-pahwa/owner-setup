import React from 'react';

import './app.scss';

export const HomePageApp = ({isNested}) => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <div className="app">
      <header className="flex">
        <h1>Welcome to {isNested ? 'Nested': ''} home-page!</h1>
      </header>
    </div>
  );
};

export default HomePageApp;
