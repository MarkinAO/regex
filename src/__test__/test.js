import Validator from '../js/main';

test('Test validateUsername', () => {
  const validator = new Validator();
  validator.string = '_Predator';
  expect(validator.validateUsername()).toBe(false);
  validator.string = '-Predator';
  expect(validator.validateUsername()).toBe(false);
  validator.string = '1Predator';
  expect(validator.validateUsername()).toBe(false);
  validator.string = 'Predator_';
  expect(validator.validateUsername()).toBe(false);
  validator.string = 'Predator-';
  expect(validator.validateUsername()).toBe(false);
  validator.string = 'Predator1';
  expect(validator.validateUsername()).toBe(false);
  validator.string = 'Predator12345_X';
  expect(validator.validateUsername()).toBe(false);
  validator.string = 'Predator45_Вася_X';
  expect(validator.validateUsername()).toBe(false);
  validator.string = 'Predator123_X';
  expect(validator.validateUsername()).toBe(true);
  validator.string = 'Alien-vs-predator_777_Valera';
  expect(validator.validateUsername()).toBe(true);
});

test('Test clearPhoneNumber', () => {
  const validator = new Validator();
  validator.string = '8 (927) 000-00-00';
  expect(validator.clearPhoneNumber()).toBe('+79270000000');
  validator.string = '+7 960 000 00 00';
  expect(validator.clearPhoneNumber()).toBe('+79600000000');
  validator.string = '+86 000 000 0000';
  expect(validator.clearPhoneNumber()).toBe('+860000000000');
});
