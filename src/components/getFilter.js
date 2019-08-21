/* eslint-disable indent */
/* eslint-disable no-unused-expressions */

import {dataCard} from './data';

const getFilter = [{
    title: `all`,
    count() {
      return dataCard.length;
    }
  }, {
    title: `overdue`,
    count() {
      let date = Date.now();
      return dataCard.filter((card) => {
        return card.dueDate < date;
      }).length;
    }
  },
  {
    title: `today`,
    count() {
      let date = new Date().toDateString();
      return dataCard.filter((card) => {
        return new Date(card.dueDate).toDateString() === date;
      }).length;
    }
  },
  {
    title: `favorites`,
    count() {
      return dataCard.filter((card) => {
        return card.isFavorite === true;
      }).length;
    }
  },
  {
    title: `tags`,
    count() {

    }
  },
  {
    title: `repeating`,
    count() {

    }
  },
  {
    title: `archive`,
    count() {

    }
  },

];


export {
  getFilter
};