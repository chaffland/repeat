'use strict';

function repeat(times) {
  return target => async function () {
    await target.apply(this, arguments);

    if (times - 1) {
      return repeat(times - 1)(target).apply(this, arguments);
    }
  };
}

module.exports = repeat;
