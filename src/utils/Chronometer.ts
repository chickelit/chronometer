const secondsInDay = 86400;

class Chronometer {
  time = 0;
  isRunning = false;
  interval: any;

  start() {
    this.isRunning = true;

    this.interval = setInterval(() => {
      if (this.isRunning) {
        this.time += 1;

        if (this.time === secondsInDay) {
          this.pause();

          return;
        }

        this.onChange(this.time);
      }
    }, 1000);
  }

  reset() {
    this.pause();

    this.time = 0;
  }

  pause() {
    clearInterval(this.interval);

    this.isRunning = false;
  }

  onChange(time: number) {}
}

export default new Chronometer();
