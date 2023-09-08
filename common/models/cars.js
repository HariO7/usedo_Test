"use strict";

module.exports = function (Cars) {
  Cars.observe("after save", function generateRandomCode(ctx, next) {
    console.log("after save in cars");
    next();
  });
};
