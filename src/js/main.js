export default class Validator {
  constructor() {
    this.string = '';
  }

  validateUsername() {
    return /^[^\d\-_][-\w]*[^\d\-_]$/gmi.test(this.string) && !/\d{4,}/gm.test(this.string);
  }

  clearPhoneNumber() {
    const plus = this.string[0] === '+' ? '+' : '';
    this.string = plus + this.string.replace(/\D*/g, '');

    if (!plus) {
      let stringBeginning = this.string.slice(0, -10);
      const stringEnd = this.string.slice(stringBeginning.length, this.string.length);
      stringBeginning = `+${Number(stringBeginning) - 1}`;

      this.string = stringBeginning + stringEnd;
    }

    return this.string;
  }
}
