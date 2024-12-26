<script setup lang="ts">
import { Film } from '@/types'
import AppBadge from '@/components/AppBadge.vue'

defineProps<{
  film:Film
}>()
</script>

<template>
  <div class="film-item">
    <img :src="film?.poster" :alt="film?.name" class="film-item__img">
    <div class="film-item__info">
      <h4 class="film-item__info--title">{{film?.name}}</h4>
      <p class="film-item__info--description">{{film?.description}}</p>
    </div>
    <div class="film-item__badge">
      <AppBadge badgeStyle="rating" :text="film.rating" />
      <AppBadge badgeStyle="genre" :text="film.genre" />
      <AppBadge badgeStyle="duration" :text="film.duration" />
    </div>
  </div>
</template>

<style scoped>
.film-item{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 12px;
  border-radius: 16px;
  background: var(--color-gray-light);
  cursor: pointer;
  transition: 0.3s ease-in;
  z-index: 1;
}

.film-item:hover{
  transform: translate(-8px, -8px);
  box-shadow: 8px 8px 0 0 var(--color-purple);
}

.film-item__img{
  border-radius: 8px;
  min-height: 172px;
  max-height: 172px;
  height: 100%;
  object-fit: cover;
  object-position: top;
  background: #0000004D;
}

.film-item__info{
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.film-item__info--title{
  font-size: 28px;
  line-height: 32.81px;
  font-weight: 700;
  color: var(--color-white);
  margin: 0;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.film-item__info--description{
  margin: 0;
  color: var(--color-white);
  font-size: 14px;
  line-height: 16.41px;
  font-weight: 500;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.film-item__badge{
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
