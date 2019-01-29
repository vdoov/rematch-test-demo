import React from 'react';
import Highlight from 'react-highlight';
import code from '!raw-loader!../../store/index.js';

const StoreEditor = () => (
  <Highlight className='javascript'>
    {code}
  </Highlight>
);

export default StoreEditor;
