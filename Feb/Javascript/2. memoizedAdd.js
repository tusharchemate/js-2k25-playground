const memoizedAdd = (() => {
  const cache = {};
  return (num) => {
    if (num in cache) return cache[num];
    cache[num] = num + 10;
    return cache[num];
  };
})();
