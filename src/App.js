import React from 'react';

const App = () => {
  let likes = 5;

  function increment() {
    likes += 1;
    console.log('####: likes', likes);
  }
  return (
    <div className='App'>
      <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={() => (likes -= 1)}>Decrement</button>
    </div>
  );
};

export default App;
