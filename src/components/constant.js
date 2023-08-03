export const OPERATOR = [
    { label: "Match All", value: "AND" },
    { label: "Match Any", value: "OR" },
]

export const STR_MATCH_MODE = [
    { label: "Starts with", value: "startsWith", },
    { label: "Contains", value: "contains", },
    { label: "Not contains", value: "notContains", },
    { label: "Ends with", value: "endsWith", },
    { label: "Equals", value: "equals", },
    { label: "Not equals", value: "notEquals" }
]

export const NUM_MATCH_MODE = [
    { label: "Equals", value: "equals", },
    { label: "Not equals", value: "notEquals", },
    { label: "Less than", value: "lt", },
    { label: "Less than or equal to", value: "lte", },
    { label: "Greater than", value: "gt", },
    { label: "Greater than or equal to", value: "gte" },
]

export const DATE_MATCH_MODE = [
    { value: "dateIs", label: "Date is" },
    { value: "dateIsNot", label: "Date is not" },
    { value: "dateBefore", label: "Date before" },
    { value: "dateAfter", label: "Date after" }
]

export const BOOLEAN_MATCH_MODE = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" }
]