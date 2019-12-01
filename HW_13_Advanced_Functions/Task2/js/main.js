const ladder = {
  step: 0,
  follower: '',
  up() {
    this.step++;

    this.follower += this.follower ? '+1' : '1';

    return this;
  },
  down() {
    this.follower += '-1';
    this.step--;

    return this;
  },
  snowStep() {
    return `${this.follower} = ${this.step}`;
  },
};

ladder.up().down().up().up().snowStep();
