/* eslint-disable react/prop-types */
import React from 'react';

import Counter from './Counter';

function Page({ count, onClick }) {
  return (
    <div>
      <Counter count={count} onClick={onClick} />
    </div>
  );
}

export default Page;
