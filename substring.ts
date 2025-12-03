const isInvalidId = (id: string) => {
  let i = 0;
  let j = i + 1;

  while (j < id.length) {
    console.log(id.substring(i, j), id.substring(j));
    if (id.substring(i, j) === id.substring(j)) {
      return true;
    }
    j++;
  }

  return false;
};

console.log(isInvalidId("111"));
