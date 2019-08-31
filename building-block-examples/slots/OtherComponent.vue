<template>
  <div>
    <button type="submit">
      <slot>Submit</slot>
    </button>
    <button type="button">
      <slot name="button">Special Slot button</slot>
    </button>
  </div>
</template>
