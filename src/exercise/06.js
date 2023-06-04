// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef();
  const [error, setError] = React.useState(null);
  const [userName, setUserName] = React.useState('');
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const validateUsername = (e) => {
    const {value} = e.target;
    // setUserName(value);
    setUserName(value.toLowerCase());
    // setError(false);
    // if(value.toLowerCase() !== value){
    //   setError('Username must be lower case')
    // }
  }
  return (
    // <form onSubmit={({target:{ elements }}) => onSubmitUsername(elements[0].value)}>
    // <form onSubmit={() => onSubmitUsername(inputRef.current.value)}>
    <form onSubmit={() => onSubmitUsername(userName)}>
      <div>
        <label>Username:</label>
        {/* <input ref={inputRef} onChange={validateUsername} type="text" /> // uncontrolled */}
        <input value={userName} onChange={validateUsername} type="text" />
      </div>
      <div role='alert' style={{color: 'red'}}>
        {error}
      </div>
      <button type="submit" disabled={!!error}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
