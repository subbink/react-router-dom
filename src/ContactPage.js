//import React from 'react';
//const ContactPage = () => <div>This is an About Page</div>
// Maybe https://jaredpalmer.com/formik/
// https://reactjs.org/docs/forms.html
// https://reactjs.org/docs/hooks-state.html
import React, { useState, useEffect } from 'react';

function ContactPage() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [keys, setKeys] = useState("");
  const allowedKeys = [0x8, // backspace
          0x30,0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39, // 0-9
          0x4e, 0x6e // N,n
        ];

  useEffect(
    () => {
        if (keys.includes('n') || keys.includes('N')) {
            setTime("NT");
        } else {
          switch (keys.length) {
            case 1:
              setTime("HH:MM:SS.0" + keys);
              break;
            case 2:
              setTime("HH:MM:SS." + keys);
              //setTime("HH:MM:SS.{0}".(keys));
              break;
            case 3:
              setTime("HH:MM:0" + keys[0] + "." + keys.substring(1,3));
              break;
            case 4:
              setTime("HH:MM:" + keys.substring(0,2) +
                "." + keys.substring(2));
              break;
            case 5:
              setTime("HH:M" + keys.substring(0,1) + 
                ":" + keys.substring(1,3) + 
                "." + keys.substring(3));
              break;
            case 6:
              setTime("HH:" + keys.substring(0,2) + 
                ":" + keys.substring(2,4) + 
                "." + keys.substring(4));
              break;
            case 7:
              setTime("H" + keys.substring(0,1) + 
                ":" + keys.substring(1,3) + 
                ":" + keys.substring(3,5) + 
                "." + keys.substring(5));
              break;
            case 8:
              setTime("" + keys.substring(0,2) + 
                ":" + keys.substring(2,4) + 
                ":" + keys.substring(4,6) + 
                "." + keys.substring(6));
              //setTime("HH:MM:" + keys.substring(0,1) + "." + keys.substring(7));
              break;
            default:
              setTime(keys);
              break;
          }
        }
    },
    [keys],
  );
  function handleChange(event) {
    setName(event.target.value);
  }

  function handleTimeChange(event) {
    //console.log(event.keyCode);
    if (allowedKeys.includes(event.keyCode)) {
      if (event.keyCode === 8) {
      //if (event.target.value === 'n' || event.target.value === 'N') {
      //  setTime("NT");
        setKeys("");
        //setTime("");
      } else {
        //if (keys === undefined or keys === "") {
        //} else {
          // HH:MM:SS.ss
          setKeys(keys + event.key);
          //console.log(keys.length);
          //setTime(keys + event.key);
        //}
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
