export const applyDrag0 = (arr1, dragResult1) => {
  const { removedIndex, addedIndex, payload } = dragResult1;
  if (removedIndex === null && addedIndex === null) return arr1;
  const result = [...arr1];
  let itemToAdd = payload;
  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }
  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }
  return result;
};

export const loadItems0 = (collection1) => {
  let result = []
  if (localStorage.getItem(collection1)) {
    try {
      result = JSON.parse(localStorage.getItem(collection1));
    } catch(e) {
      localStorage.removeItem(collection1);
    }
  }
  return result;
  
};

export const saveItems0 = (collection1, data) => {
  let parsed = JSON.stringify(data);
  localStorage.setItem(collection1, parsed);
};