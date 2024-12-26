<script setup lang="ts">
import { useRoute } from 'vue-router'
import axios from 'axios'
import {DetailFilm} from '@/types'
import { onMounted, ref } from 'vue'
import AppBadge from '@/components/AppBadge.vue'

const route = useRoute()

const filmInfo = ref<DetailFilm>({})

const detailFilm = async (id:number): Promise<void> => {
  try {
    const { data } = await axios.get('/detail.json')
    const dataMovie:DetailFilm = data.items.find(movie => movie?.id === Number(id));
    filmInfo.value = dataMovie
  } catch (e:never){
    console.error(e)
  }
}

onMounted(async ()=>{
 await detailFilm(route.params.id)
})
</script>

<template>
  <div class="container">
    <div class="film-block">
      <div class="film-block__left">
        <h2>Title of a movie</h2>
        <img :src="filmInfo?.poster" :alt="filmInfo?.name">
        <div class="film-block__badge">
          <AppBadge badgeStyle="rating" :text="filmInfo?.rating" />
          <AppBadge badgeStyle="genre" :text="filmInfo?.genre" />
          <AppBadge badgeStyle="duration" :text="filmInfo?.duration" />
        </div>
      </div>
      <div class="film-block__right">
        <h2>Description</h2>
        <p class="film-block__right--description">{{filmInfo?.description}}</p>
        <h2>Trivia</h2>
        <ul>
          <li v-for="(item, index) in filmInfo?.trivia" :key="index">{{item}}</li>
        </ul>
        <h2>Actors</h2>
        <ul>
          <li v-for="(item, index) in filmInfo?.actors" :key="index">
            <a :href="`https://www.imdb.com/name/${item.imdb_id}`" target="_blank">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.film-block{
  display: flex;
  gap: 64px;
  padding: 24px 16px 42px 16px;
  color: var(--color-white);
  min-height: 100vh;
}

@media (max-width: 600px) {
  .film-block {
    flex-direction: column;
    gap: 30px;
    padding: 24px 0 42px 0;
  }
}

.film-block__left{
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.film-block__left h2{
  margin: 0;
  font-size: 32px;
  line-height: 37.2px;
  font-weight: 700;
}

.film-block__left img{
  border-radius: 16px;
  object-fit: cover;
  max-width: 240px;
  max-height: 320px;
  width: 100%;
  height: 100%;
}

.film-block__badge{
  display: flex;
  align-items: center;
  gap: 8px;
}

.film-block__right {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.film-block__right h2{
  margin: 0;
  font-size: 32px;
  line-height: 37.2px;
  font-weight: 700;
}

.film-block__right--description{
  margin: 0;
  font-size: 14px;
  line-height: 16.41px;
  font-weight: 500;
  max-width: 340px;
}

.film-block__right ul{
  margin: 0;
  padding-left: 15px;
}

.film-block__right ul a{
  color: var(--color-white);
  text-decoration: underline;
}
</style>
