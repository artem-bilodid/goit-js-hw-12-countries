import { error, defaultModules, Stack } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';

const initializeErrorStack = () => {
  if (typeof window.maxOpenWait === 'undefined') {
    window.maxOpenWait = new Stack({
      dir1: 'down',
      dir2: 'left',
      firstpos1: 25,
      firstpos2: 25,
      modal: false,
      maxOpen: 1,
      maxStrategy: 'close',
      push: 'top',
      maxClosureCausesWait: false,
    });
  }
};

export default class Notification {
  constructor() {}

  init() {
    defaultModules.set(PNotifyMobile, {});
    initializeErrorStack();
  }

  closeAllErrorAlerts = () => {
    window.maxOpenWait.close();
  };

  noMatchesError() {
    error({
      text: 'No matches were found. Please enter a more specific query',
      stack: window.maxOpenWait,
    });
  }

  tooManyMatchesError() {
    error({
      text: 'Too many matches found. Please enter a more specific query!',
      stack: window.maxOpenWait,
    });
  }
}
