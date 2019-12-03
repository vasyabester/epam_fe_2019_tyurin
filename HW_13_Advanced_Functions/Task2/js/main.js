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
    // eslint-disable-next-line
    console.log(`${this.follower} = ${this.step}`);

    return this;
  },
};

ladder.up().down().up().up().snowStep().up().snowStep();
