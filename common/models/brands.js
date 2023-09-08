"use strict";

module.exports = (Brands) => {
  Brands.observe("before save", (ctx, next) => {
    console.log("before save in Brands");
    next();
  });
};
