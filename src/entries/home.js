import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/componentes/playlist';
import data from '../api.json'

//console.log('Hola mundo!')

const container = document.getElementById('home-container')

//ReactDOM.render(que voy a renderizar y donde lo haré);

// const holaMundo = <h1>Hola mundo</h1>;

render(<Home data={data} />, container);

