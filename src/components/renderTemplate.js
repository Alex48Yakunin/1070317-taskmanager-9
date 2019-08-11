import {
  menu
} from './menu.js';
import {
  search
} from './search.js';
import {
  mainFilter
} from './mainFilter.js';
import {
  board
} from './board.js';
import {
  editTask
} from './editTask.js';
import {
  card
} from './card.js';
import {
  boardFilter
} from './boardFilter.js';
import {
  loadMore
} from './loadMore.js';

const renderTemplate = (container, node) => {
  const block = document.querySelector(container);
  const div = document.createElement(`section`);
  div.innerHTML = node.trim();
  block.appendChild(div.firstChild);
};

const renderTemplatePrepend = (container, node) => {
  const block = document.querySelector(container);
  const div = document.createElement(`section`);
  div.innerHTML = node.trim();
  block.prepend(div.firstChild);
};

const render = () => {
  renderTemplate(`.main__control`, menu());
  renderTemplate(`.main`, search());
  renderTemplate(`.main`, mainFilter());
  renderTemplate(`.main`, board());
  renderTemplate(`.board__tasks`, editTask());
  for (let i = 0; i < 3; i++) {
    renderTemplate(`.board__tasks`, card());
  }
  renderTemplatePrepend(`.board`, boardFilter());
  renderTemplate(`.board`, loadMore());
};

export {
  render as renderTemplate
};
