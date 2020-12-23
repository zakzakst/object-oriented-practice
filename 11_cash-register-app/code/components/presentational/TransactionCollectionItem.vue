<template>
  <tr>
    <th>{{ data.date }}</th>
    <td>{{ data.sum }}</td>
    <td>
      <div class="buttons are-small is-justify-content-flex-end">
        <button class="button">詳細を見る</button>
        <button class="button">修正する</button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss">
</style>
