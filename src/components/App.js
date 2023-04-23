import React from 'react';
import { Header } from './Header';
import { AddContact } from './AddContact';
import { ContactList } from './ContactList';
import "./App.css";
function App() {
  const contacts = [
    {
      id: 1,
      name: "Kavitha",
      email: "kavitha@gmail.com"
    },
    {
      id: 2,
      name: "Ramu",
      email: "ramu@gmail.com"
    }
  ];
  return (
    <div className="ui container">
        {/* <Header/> */}
        <AddContact/>
        <ContactList contacts={contacts}/>
     </div>
  );
}

export default App;
