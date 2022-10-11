import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form'

ReactDOM.render(
  <Form onSubmit={fullName => alert(fullName)} />,
  document.getElementById('root')
);