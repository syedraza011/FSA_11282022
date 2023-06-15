// import { useEffect } from "react";
import React, { useState, useEffect } from "react";
import Topping, { friends } from "./data";
let friendList = [];
// friends.map((friend) => {
//   friendList.push(friend);
//   console.log(friendList);
// });

function App() {
  const [contacts, setContacts] = useState([]);
  const [contactType, setContactType] = useState("");

  useEffect(() => {
    setContacts(friends);
    console.log(contacts)
  });

  useEffect(() => {
    const {data} = axios.get('api/data');
      setContactType(data);
    console.log("Current contactType: ", contactType);
    if (contactType === "friends") {
      setContacts(friends);
    } else if (contactType === "family") {
      setContacts(family);
    } else if (contactType === "enemies") {
      setContacts(enemies);
    }
  }, [contactType]);

  return (
    <div className="App">
      <main className="App-main">
        {
          /* Your code will go here */
          <ul className="contact-container">
            {contacts.length
              ? contacts.map((contact) => {
                  return (
                    <li className="contact-li" key={contact.id}>
                      <div>Name: {contact.name} </div>
                      <div>Phone: {contact.phone} </div>
                    </li>
                  );
                })
              : "No friends to list :("}
          </ul>
        }
      </main>
      {
        /* Your code will go here */
        //   <nav>
        //   <button>Toggle Family</button>
        //   <button>Toggle Friends</button>
        //   <button>Toggle Enemies</button>
        // </nav>
        <header className="main">
          <nav>
            <button onClick={() => setContactType("family")}>
              Toggle Family
            </button>
            <button onClick={() => setContactType("friends")}>
              Toggle Friends
            </button>
            <button onClick={() => setContactType("enemies")}>
              Toggle Enemies
            </button>
          </nav>
          <ul>// code from part 1</ul>
        </header>
      }
    </div>
  );
}

export default App;
