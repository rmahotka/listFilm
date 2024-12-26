<script setup lang="ts">
import AppFilmItem from '@/components/AppFilmItem.vue'
import axios from 'axios'
import { Film } from '@/types'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const filmsList = ref<Film[]>([])

const getFilms = async (): Promise<void> => {
  try {
    const { data } = await axios.get<{ items: Film[] }>('/data.json')
    filmsList.value = data?.items
  } catch (e:never) {
    console.error(e)
  }
}

const openFilm = (id) => {
  router.push({name:'movie', params:{ id }})
}

onMounted(async () => {
  await getFilms()
})
</script>

<template>
  <div class="container">
    <div class="list-films-block">
      <template v-for="film in filmsList" :key="film.id">
        <transition name="fade">
          <AppFilmItem :film="film" @click="openFilm(film.id)"/>
        </transition>
      </template>
    </div>
  </div>
</template>

<style scoped>
.list-films-block {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 32px 16px;
}

@media (max-width: 1200px) {
  .list-films-block {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .list-films-block {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .list-films-block {
    grid-template-columns: 1fr;
    padding: 32px 0;
  }
}

</style>
