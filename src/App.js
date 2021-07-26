import React from 'react'
import './App.css';
import ProfilePhoto from './component/ProfilePhoto/ProfilePhoto';
import FullName from './component/FullName/FullName';
import Address from './component/Address/Address';

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
