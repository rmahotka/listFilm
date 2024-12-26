<script setup lang="ts">

</script>

<template>
<header class="header">
  <div class="container">
    <RouterLink to="/">Test Task</RouterLink>
  </div>
</header>
</template>

<style scoped>
.header{
  z-index: 10;
  position: sticky;
  top: 0;
  padding: 31px 16px;
  font-size: 32px;
  line-height: 37.5px;
  font-weight: 700;
  background: var(--color-gray-light);
  box-shadow: 0px 4px 4px 0px #00000040;
}

a{
  color: var(--color-white);
}

@media (max-width: 600px) {
  .header {
    padding: 31px 0;
  }
}
</style>
