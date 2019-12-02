const complexFunction = function (arg1, arg2) {
  return arg1 + arg2;
};

function cache(cachedFunction) {
  const cachedData = {};

  return function (a, b) {
    const joinedArguments = `${a}-${b}`;

    if (!{}.hasOwnProperty.call(cachedData, joinedArguments)) {
      cachedData[joinedArguments] = cachedFunction(a, b);
    }

    return cachedData[joinedArguments];
  };
}

const cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar');
cachedFunction('foo', 'bar');
cachedFunction('foo', 'baz');
