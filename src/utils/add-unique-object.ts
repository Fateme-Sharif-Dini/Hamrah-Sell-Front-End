type MyObject = { [key: string]: any };

export const addUniqueObject = (
  array: MyObject[],
  newObject: MyObject
): MyObject[] => {
  const exists = array.some(
    (item) => JSON.stringify(item) === JSON.stringify(newObject)
  );

  if (!exists) {
    array.push(newObject);
  }

  return array;
};
