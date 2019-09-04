<template>
  <div class="calculator">
    <TheScreen :value="displayValue"></TheScreen>
    <div class="calculator-keys">
      <TheButton
        v-for="(button, index) in buttons"
        :key="index"
        :button="button"
        :disable="submitted"
        :active="button.value === operator"
        @pressed="handleClick"
      >
        <span v-html="button.display"></span>
      </TheButton>
    </div>
  </div>
</template>

<script>
import TheScreen from "./TheScreen";
import TheButton from "./TheButton";
import buttons, {
  OPERATOR_ADD,
  OPERATOR_MINUS,
  OPERATOR_MULTIPLY,
  OPERATOR_DIVIDE,
  OPERATOR_ALL_CLEAR,
  OPERATOR_EQUALS
} from "@/shared/buttons";

const overflowLength = 10;
export default {
  data() {
    return {
      previousNumber: null,
      workingNextNumber: false,
      displayValue: "0",
      operator: null,
      overflow: false,
      submitted: false,
      buttons
    };
  },
  components: {
    TheScreen,
    TheButton
  },
  methods: {
    handleClick(buttonValue) {
      switch (buttonValue) {
        case OPERATOR_MINUS:
        case OPERATOR_MULTIPLY:
        case OPERATOR_DIVIDE:
        case OPERATOR_ADD:
          this.handleOperators(buttonValue);
          break;
        case OPERATOR_EQUALS:
          this.handleEquals();
          break;
        case OPERATOR_ALL_CLEAR:
          this.reset();
          break;
        default:
          this.handleNumber(buttonValue);
          break;
      }
    },
    reset() {
      this.previousNumber = null;
      this.displayValue = "0";
      this.operator = null;
      this.overflow = false;
      this.submitted = false;
    },
    handleOperators(operator) {
      this.operator = operator;
      if (this.previousNumber === null) {
        this.previousNumber = parseFloat(this.displayValue);
        this.displayValue = "0";
      }
    },
    handleEquals() {
      if (this.previousNumber && this.operator) {
        const currentValue = parseFloat(this.displayValue);
        debugger;
        const value = `${operations[this.operator](
          this.previousNumber,
          currentValue
        )}`;
        const numberParts = value.split(".");
        const length = numberParts[0].length;
        if (length > overflowLength - 1) {
            this.displayValue = "OVERFLOW";
        } else {
          this.displayValue = `${numberParts[0]}`
          if (numberParts.length > 1) {
              const remainder = length - overflowLength - 1;
              this.displayValue = `${this.displayValue}.${numberParts[1].length <= remainder ? numberParts[1] : numberParts[1].substring(0,remainder)}`;
          }
        }
        this.submitted = true;
      }
    },
    handleNumber(digit) {
      if (digit === ".") {
        if (
          this.displayValue.indexOf(".") === -1 &&
          this.displayValue.length < overflowLength - 1
        ) {
          this.displayValue += ".";
        }
      } else {
        this.displayValue =
          this.displayValue === "0"
            ? digit
            : this.displayValue.length < overflowLength
            ? this.displayValue + digit
            : this.displayValue;
      }
    }
  }
};

const operations = {
  [OPERATOR_ADD](previousNumber, currentValue) {
    return previousNumber + currentValue;
  },
  [OPERATOR_MINUS](previousNumber, currentValue) {
    return previousNumber - currentValue;
  },
  [OPERATOR_MULTIPLY](previousNumber, currentValue) {
    return previousNumber * currentValue;
  },
  [OPERATOR_DIVIDE](previousNumber, currentValue) {
    return previousNumber / currentValue;
  }
};
</script>
<style>
.calculator {
  border: 1px solid #ccc;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
}

.calculator-keys {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 20px;
}
</style>