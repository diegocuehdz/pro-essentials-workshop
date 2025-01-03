const idToUppercase = (obj: { id: string }) => {
  return obj.id.toUpperCase();
};
const idToInt = (obj: { id: string }) => {
  return parseInt(obj.id);
};

const funcs = [idToUppercase, idToInt];

const resolveAll = (obj: { id: string }) => {
  return funcs.map((func) => {
    return func(obj);
  });
};

const result = resolveAll({
  id: "123",
});

//NOTES:
/*
When you intersect functions the parameters get intersected and the return types conver to a union
"So if you think about it, then when you have two, if you have unions of functions, then the parameters get intersected together and the return types get unioned together.""
*/
