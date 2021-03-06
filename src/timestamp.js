'use strict';

function Timestamp(seconds, nanoseconds) {
  this.seconds = seconds;
  this.nanoseconds = nanoseconds;
}

Timestamp.fromDate = function (date) {
  return Timestamp.fromMillis(date.getTime());
};

Timestamp.fromMillis = function (ms) {
  var sec = Math.floor(ms / 1000);
  var ns = (ms % 1000) * 1000 * 1000;
  return new Timestamp(sec, ns);
};

Timestamp.now = function () {
  return Timestamp.fromDate(new Date());
};

Timestamp.prototype.toDate = function () {
  var millis = this.seconds * 1000 + this.nanoseconds / (1000 * 1000);
  return new Date(millis);
};

Timestamp.prototype.toMillis = function () {
  var millis = this.seconds * 1000 + this.nanoseconds / (1000 * 1000);
  return millis;
};

module.exports = Timestamp;
