/* eslint-disable eqeqeq */

import {getTasc} from './getTasc.js';
import {menu} from './menu.js';
import {search} from './search.js';
import {mainFilter} from './mainFilter.js';
import {board} from './board.js';
import {editTask} from './editTask.js';
import {card} from './card.js';
import {boardFilter} from './boardFilter.js';
import {loadMore} from './loadMore.js';
import {dataCard} from './data.js';
import {getFilter} from './getFilter.js';

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
  document.addEventListener(`DOMContentLoaded`, renderTemplate(`.main`, mainFilter(getFilter)));
  renderTemplate(`.main`, board());
  for (let key in dataCard) {
    if (key == 0) {
      renderTemplate(`.board__tasks`, editTask());
    } else {
      if (key <= 8) {
        renderTemplate(`.board__tasks`, card(getTasc()));
      }
    }
  }
  renderTemplatePrepend(`.board`, boardFilter());
  renderTemplate(`.board`, loadMore());
  document.addEventListener(`DOMContentLoaded`, function () {
    document.getElementById(`load-more`).addEventListener(`click`, function () {
      for (let key in dataCard) {
        if (key > 8) {
          renderTemplate(`.board__tasks`, card(getTasc()));
          document.getElementById(`load-more`).style.display = `none`;
        }
      }
    });
  });

};

export {render as renderTemplate};
