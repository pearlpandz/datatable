"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STR_MATCH_MODE = exports.OPERATOR = exports.NUM_MATCH_MODE = exports.DATE_MATCH_MODE = exports.BOOLEAN_MATCH_MODE = void 0;
var OPERATOR = [{
  label: "Match All",
  value: "AND"
}, {
  label: "Match Any",
  value: "OR"
}];
exports.OPERATOR = OPERATOR;
var STR_MATCH_MODE = [{
  label: "Starts with",
  value: "startsWith"
}, {
  label: "Contains",
  value: "contains"
}, {
  label: "Not contains",
  value: "notContains"
}, {
  label: "Ends with",
  value: "endsWith"
}, {
  label: "Equals",
  value: "equals"
}, {
  label: "Not equals",
  value: "notEquals"
}];
exports.STR_MATCH_MODE = STR_MATCH_MODE;
var NUM_MATCH_MODE = [{
  label: "Equals",
  value: "equals"
}, {
  label: "Not equals",
  value: "notEquals"
}, {
  label: "Less than",
  value: "lt"
}, {
  label: "Less than or equal to",
  value: "lte"
}, {
  label: "Greater than",
  value: "gt"
}, {
  label: "Greater than or equal to",
  value: "gte"
}];
exports.NUM_MATCH_MODE = NUM_MATCH_MODE;
var DATE_MATCH_MODE = [{
  value: "dateIs",
  label: "Date is"
}, {
  value: "dateIsNot",
  label: "Date is not"
}, {
  value: "dateBefore",
  label: "Date before"
}, {
  value: "dateAfter",
  label: "Date after"
}];
exports.DATE_MATCH_MODE = DATE_MATCH_MODE;
var BOOLEAN_MATCH_MODE = [{
  label: "Yes",
  value: "yes"
}, {
  label: "No",
  value: "no"
}];
exports.BOOLEAN_MATCH_MODE = BOOLEAN_MATCH_MODE;