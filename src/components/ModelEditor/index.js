import React from 'react';
import Highlight from 'react-highlight';
import code from '!raw-loader!../../store/models/users.js';

const ModelEditor = () => (
  <Highlight className='javascript'>
    {code}
  </Highlight>
);

export default ModelEditor;
