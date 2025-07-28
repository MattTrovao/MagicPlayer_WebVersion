<script setup>
const props = defineProps({
  outline: {
    type: Boolean,
    default: false,
  },
  secondary: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    :class="`
      btn
      ${props.secondary ? '--secondary' : ''}
      ${props.outline ? '--outline' : ''}
    `"
  >
    <slot />
  </button>
</template>

<style lang="css" scoped>
.btn {
  border: 2px solid transparent;
  border-radius: var(--radius);
  background: var(--primary-500);
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--white);
  cursor: pointer;
  transition: var(--transition);

  &.--outline {
    border-color: var(--primary-500);
    background: none;
    color: var(--primary-500);
    &:hover {
      border-color: var(--primary-700);
      background: var(--primary-200);
    }

    &.--secondary {
      border-color: var(--secondary-500);
      background: none;
      color: var(--secondary-900);
      &:hover {
        border-color: var(--secondary-700);
        background: var(--secondary-100);
      }
    }
  }

  &.--secondary {
    background: var(--secondary-500);
    &:hover {
      background: var(--secondary-700);
    }
  }

  &:hover {
    background: var(--primary-700);
  }
}
</style>
