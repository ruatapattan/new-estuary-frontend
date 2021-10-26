exports.validateCharacter = amount => {
  const regExpArr = [/[0-9]/];

  const result = regExpArr.reduce((accum, item) => {
    if (accum) {
      const reg = new RegExp(item);
      accum = reg.test(amount);
    }
    return accum;
  }, true);

  return result;
};
