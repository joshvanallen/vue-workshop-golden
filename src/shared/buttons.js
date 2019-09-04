export const OPERATOR_ADD = "add";
export const OPERATOR_MINUS = "minus";
export const OPERATOR_MULTIPLY = "multiply";
export const OPERATOR_DIVIDE = "divide";
export const OPERATOR_ALL_CLEAR = "all-clear";
export const OPERATOR_EQUALS = "equals";
export default [
    {
      class: "operator",
      value: OPERATOR_ADD,
      display: "+"
    },
    {
      class: "operator",
      value: OPERATOR_MINUS,
      display: "-"
    },
    {
      class: "operator",
      value: OPERATOR_MULTIPLY,
      display: "&times;"
    },
    {
      class: "operator",
      value: OPERATOR_DIVIDE,
      display: "&divide;"
    },
    {
      class: "",
      value: "7",
      display: "7"
    },
    {
      class: "",
      value: "8",
      display: "8"
    },
    {
      class: "",
      value: "9",
      display: "9"
    },
    {
      class: "",
      value: "4",
      display: "4"
    },
    {
      class: "",
      value: "5",
      display: "5"
    },
    {
      class: "",
      value: "6",
      display: "6"
    },
    {
      class: "",
      value: "1",
      display: "1"
    },
    {
      class: "",
      value: "2",
      display: "2"
    },
    {
      class: "",
      value: "3",
      display: "3"
    },
    {
      class: "operator red",
      value: OPERATOR_ALL_CLEAR,
      display: "AC"
    },
    {
      class: "",
      value: "0",
      display: "0"
    },
    {
      class: "",
      value: ".",
      display: "."
    },
    {
      class: "operator blue",
      value: OPERATOR_EQUALS,
      row: '2',
      column: '4',
      rowEnd: '6',
      columnEnd: '4',
      display: "="
    }
  ]