"use strict";

function repeat(times) {
  return target => async function () {
    await target.apply(this, arguments);
    return --times && repeat(times)(target).apply(this, arguments);
  };
}

module.exports = repeat;
