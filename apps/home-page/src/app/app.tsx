import React, { useState, useEffect } from 'react';

import './app.scss';

interface IUserInfo {
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  title: string;
  thumb_url: string | null;
  user_id: number;
}

export interface UserSession {
  id: number;
  is_super_user: boolean;
  is_super_using: boolean;
  features: string[];
  locale: string;
  user_info: IUserInfo;
}


export const HomePageApp = ({isNested}) => {
  const [userSession, setUserSession] = useState<UserSession>({
    id: 0,
    is_super_user: false,
    is_super_using: false,
    features: [],
    locale: 'en-US',
    user_info: {
      email: '',
      first_name: '',
      last_name: '',
      phone: '',
      thumb_url: '',
      title: '',
      user_id: 0
    }
  });

  useEffect(() => {
    fetch('/3.0/user/session')
      .then(_ => _.json())
      .then(setUserSession);
  }, []);
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <div className="app">
      <header className="flex">
        <h1>Welcome to {isNested ? 'Nested': ''} home-page {userSession.user_info.first_name}!</h1>
      </header>
    </div>
  );
};

export default HomePageApp;
