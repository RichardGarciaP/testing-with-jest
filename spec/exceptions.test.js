const { expect } = require('@jest/globals');

function compleAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(() => compleAndroidCode()).toThrow();
  expect(() => compleAndroidCode()).toThrow(Error);

  expect(() => compleAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compleAndroidCode()).toThrow(/JDK/);

  //expect(() => compleAndroidCode()).toThrow(/^you are using the wrong JDK$/); //fail
  expect(() => compleAndroidCode()).toThrow(/^you are using the wrong JDK!$/); //pass
});
