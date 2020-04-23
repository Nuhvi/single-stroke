import UI from './view/index';
import './style.css';
import Controller from './controller/index';

const view = UI({
  el: 'body',
});

Controller(view);
