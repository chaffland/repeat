"use strict";

function harass(times) {
  return target => async function () {
    await target.apply(this, arguments);
    return --times && harass(times)(target).apply(this, arguments);
  };
}

module.exports = harass;
