<script setup lang="ts">

</script>

<template>
<footer class="footer">
  <div class="container footer-container">
    <p class="footer-left-text">Test Task, 2022</p>
    <div class="footer-contacts">
      <a href="tel:518-363-2171" class="footer-contacts__tel">518-363-2171</a>
      <p class="footer-contacts__address">91 Park St. Fairhope, AL 36532</p>
    </div>
  </div>
</footer>
</template>

<style scoped>
.footer{
  padding: 31px 0;
  background: var(--color-gray-light);
  box-shadow: 0px -4px 4px 0px #00000040;
}

.footer-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-left-text{
  color: var(--color-white);
  font-size: 18px;
  line-height: 21.09px;
  font-weight: 700;
}

.footer-contacts{
  font-size: 14px;
  line-height: 16.41px;
  font-weight: 500;
}

.footer-contacts__tel{
  display: block;
  margin: 0;
  margin-bottom: 4px;
  text-decoration: underline;
  color: var(--color-white);
}

.footer-contacts__address{
  margin: 0;
  color: var(--color-white);
}
</style>
