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
      const arrayCard = dataCard.filter((card, i) => {
        if (i === 0) {
          return false;
        }
        return card.tags.size !== 0;
      });
      return arrayCard.length;
    }
  },
  {
    title: `repeating`,
    count() {
      const arrayCard = dataCard.filter((card, i) => {
        if (i === 0) {
          return false;
        }
        return Object.keys(card.repeatingDays).some((day) => card.repeatingDays[day]);
      });
      return arrayCard.length;
    }
  },
  {
    title: `archive`,
    count() {
      return dataCard.filter((card) => {
        return card.isArchive === true;
      }).length;
    }
  },

];


export {getFilter};
