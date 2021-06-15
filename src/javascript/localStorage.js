
   /**
   * parse the array received, so it can be set to an item in the localStorage.
   * * @param {Array} array data to set to the localStorage.
  */
  export const parseLocalStorage = (array) => { return JSON.stringify(array); }

  /**
   * Gets the localStorage value with and specific item name.
   * * @param {string} nameItem name of the item.
  */
  export const getLocalStorage = (nameItem) => { return JSON.parse(localStorage.getItem(nameItem)); }