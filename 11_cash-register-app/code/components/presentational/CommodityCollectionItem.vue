<template>
  <div class="column is-full">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-96x96">
              <img :src="data.image" :alt="`${data.name}の写真`">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ data.name }}</p>
            <p class="subtitle is-6">{{ data.price }}</p>
            <p>{{ data.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss">
</style>
