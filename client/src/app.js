import React from 'react';
import ReactDOM from 'react-dom';
import TictactoeContainer from './containers/TictactoeContainer.jsx';

window.addEventListener('load', function () {
  ReactDOM.render(
    <TictactoeContainer/>,
    document.getElementById('app')
  );
});
