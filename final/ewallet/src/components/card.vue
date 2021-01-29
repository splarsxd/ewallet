<template>
    <section class="card" :style="{backgroundColor: card.bgcolor}" @click="$emit('activated')">
    <div class="top">
        <img src="../assets/chip-light.svg" alt="chip">
        <img v-bind:src="require('../assets/vendor-' + card.img + '.svg')" alt="logo">
    </div>

    <div class="mid">
        <h2 :style="{color: card.color}">{{card.number}}</h2>
    </div>

    <div class="bot">
        <div class="holder">
        <h6 style="color: #ffffff">CARDHOLDER NAME</h6>
        <h4 :style="{color: card.color}">{{card.holder}}</h4>
        </div>
        <div class="validity">
        <h6 style="color: #ffffff">VALID</h6>
        <h4 :style="{color: card.color}">{{card.validMonth}}/{{card.validDay}}</h4>
        </div>
    </div>
    </section>
</template>

<script>
export default {
    props: {
        card: Object
    }
}
</script>

<style lang="sass" scoped>
.top
  display: flex
  justify-content: space-between

.card
  cursor: pointer
  max-width: 340px
  height: 190px
  margin: auto
  padding: 16px
  overflow: overlay
  border-radius: 12px

.bot
  display: flex
  justify-content: space-between
  text-align: left
  margin: 0

  h6
    margin: 0

  h4
    margin: 0
</style>