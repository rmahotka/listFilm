<script setup lang="ts">
import IconFilm from '@/components/icons/IconFilm.vue'
import IconStar from '@/components/icons/IconStar.vue'
import IconTime from '@/components/icons/IconTime.vue'
import { computed } from 'vue'

const props = defineProps<Props>()

type badgeType = "rating" | "genre" | "duration";

interface Props {
  badgeStyle: badgeType,
  text: string | number
}

const badgeClass = computed(() => {
  if (props.badgeStyle === "rating" && typeof props.text === "number") {
    if (props.text >= 0 && props.text < 4) {
      return "badge--rating-red";
    } else if (props.text >= 4 && props.text < 7) {
      return "badge--purple";
    } else if (props.text >= 7 && props.text <= 10) {
      return "badge--rating-green";
    }
  }

  switch (props.badgeStyle) {
    case "genre":
      return "badge--genre";
    case "duration":
      return "badge--purple";
    default:
      return "badge--default";
  }
});

const iconBadge = {
  rating: IconStar,
  genre: IconFilm,
  duration: IconTime,
} as const;

const icon = computed(() => iconBadge[props.badgeStyle as badgeType]);

const formattedText = computed(() => {
  if (props.badgeStyle === "rating" && typeof props.text === "number") {
    return props.text.toFixed(1);
  }
  if (props.badgeStyle === "genre" && typeof props.text === "string") {
    return props.text.charAt(0).toUpperCase() + props.text.slice(1);
  }
  return props.text;
});
</script>

<template>
  <div class="badge" :class="badgeClass">
    <component :is="icon" />
   {{ formattedText }}
  </div>
</template>

<style scoped>
.badge{
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 2px 6px;
  border-radius: 8px;
  color: var(--color-white);
  font-size: 11px;
  line-height: 12.89px;
}

.badge--genre{
  background: var(--color-blue);
}

.badge--purple{
  background: var(--color-purple);
}

.badge--rating-red{
  background: var(--color-red);
}

.badge--rating-green{
background: var(--color-green);
}
</style>
