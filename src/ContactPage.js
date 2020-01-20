//import React from 'react';
//const ContactPage = () => <div>This is an About Page</div>
// https://reactjs.org/docs/forms.html
// https://reactjs.org/docs/hooks-state.html
import React, { useState } from 'react';

function ContactPage() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [keys, setKeys] = useState("");
  const allowedKeys = [0x8, // backspace
          0x30,0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39, // 0-9
          0x4e, 0x6e // N,n
        ];

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleTimeChange(event) {
    console.log(event.keyCode);
    if (allowedKeys.includes(event.keyCode)) {
      if (event.keyCode === 8) {
      //if (event.target.value === 'n' || event.target.value === 'N') {
      //  setTime("NT");
        setKeys("");
        setTime("");
      } else {
        // HH:MM:SS.ss
        setKeys(keys + event.key);
        setTime(keys + event.key);
      }
    }
  }

  return (
    <div>
      <p>
        New Contact Page
      </p>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange=
          {handleChange}/>
        </label>
        <br />
        <label>
          Time:
          <input type="text" name="time" id="recordEntryTime0"
          placeholder="HH:MM:SS.ss or NT" size="14"
          value={time} onKeyDown={handleTimeChange} />
        </label>
        <br />
        <input type="submit" name="Submit" />
      </form>
    </div>
  );
}

export default ContactPage;

// vim: et ts=2 sw=2
