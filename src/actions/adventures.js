export const SET_ADVENTURE_PAGE_ID = 'SET_ADVENTURE_PAGE';

export function setAdventurePageId(pageId) {
  return {
    type: SET_ADVENTURE_PAGE_ID,
    pageId,
  };
};
