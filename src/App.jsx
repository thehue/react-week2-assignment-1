/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';

import Page from './Page';
import Buttons from './Buttons';

function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  function handleClick(increment) {
    setState({
      count: count + increment,
    });
  }

  return (
    <div>
      <Page count={count} onClick={handleClick} />
      <Buttons onClick={handleClick} />
    </div>
  );
}

export default App;
