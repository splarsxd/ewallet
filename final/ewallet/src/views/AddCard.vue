<template>
  <div class="wrapper">
    <header>
      <div class="title">
        <h1>ADD A NEW BANK CARD</h1>
      </div>
    </header>

    <main>
<!--      <section class="gcard">
        <section class="card" style="background-color: #c7c7c7">
        <div class="top">
            <img src="../assets/chip-light.svg" alt="chip">
            <img src="../assets/vendor-bitcoin.svg" alt="logo">
        </div>

        <div class="mid">
            <h2>XXXX XXXX XXXX XXXX</h2>
        </div>

        <div class="bot">
            <div class="holder">
            <h6>CARDHOLDER NAME</h6>
            <h4>FIRSTNAME LASTNAME</h4>
            </div>
            <div class="validity">
            <h6>VALID</h6>
            <h4>XX/XX</h4>
            </div>
        </div>
        </section>
      </section>-->
      <card v-bind:card="card"/>
      <section class="cardform">
        <form class="submitcard" @submit.prevent="formsend" ref="form">
          <label for="cardnumber">CARD NUMBER</label>
          <input type="text" name="cardnumber" placeholder="XXXX XXXX XXXX XXXX" class="cardnumber" v-model="card.number">
          
          <label for="cardusername">CARDHOLDER NAME</label>
          <input type="text" name="cardusername" placeholder="NAME" class="cardusername" v-model="card.holder">

          <div class="validity">
            <div class="valid">
              <label for="valid" class=labelvalid>VALID</label>
              <div class="validdate">
                <input type="text" name="monthvalid" placeholder="MM" class="valid" v-model="card.validMonth">
                <input type="text" name="yearvalid" placeholder="YY" class="valid" v-model="card.validDay">
              </div>
            </div>

            <div class="cvc">
              <label for="cvc" class="labelcvc">CVC</label>
              <div class="cvc2">
                <input type="text" name="cvc" placeholder="XXX" class="valid" v-model="card.cvc">
              </div>
            </div>
          </div>

          <select name="vendor" v-model="card.img">
            <option value="bitcoin">Bitcoin</option>
            <option value="ninja">Ninja</option>
            <option value="blockchain">Blockchain</option>
            <option value="evil">Evil</option>
          </select>

          <button>ADD CARD</button>
        </form>

      </section>
    </main>
  </div>
</template>

<script>
import card from "../components/card.vue"
export default {
  data() {
    return {
      card: {
        holder: "",
        number: "",
        validMonth: "",
        validDay: "",
        vendor: "",
        bgcolor: "#8e8e8e",
        color: "#ffffff",
        img: "bitcoin"
      }
    }
  },

  methods: {
    formsend() {
      if(this.$refs.form.vendor.value == "bitcoin") {
        this.card.bgcolor = "#e8d843"
      }
      if(this.$refs.form.vendor.value == "ninja") {
        this.card.bgcolor = "#2d2d2d"
      }
      if(this.$refs.form.vendor.value == "blockchain") {
        this.card.bgcolor = "#a06de8"
      }
      if(this.$refs.form.vendor.value == "evil") {
        this.card.bgcolor = "#ff5252"
      }
      this.$root.addcard(this.card)
      this.$router.push("/")
    }
  },
  components: {
    card
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

.submitcard
  max-width: 352px
  margin: 50px auto 0 auto
  display: flex
  flex-direction: column

label
  font-size: .6rem
  text-align: left
  margin: 3px 0

input
  padding: 10px
  margin-bottom: 10px
  border-radius: 4px
  border: 1px solid #000

.validity
  display: flex
  justify-content: space-between

.validdate
  display: flex
  justify-content: space-between

.valid
  width: 40%
  text-align: left

select
  padding: 15px
  border-radius: 5px
  margin-bottom: 15px

option
  font-weight: normal
  min-height: 1.1em
  padding: 0px 3px 2px
  display: block
  white-space: pre

button
  width: 100%
  text-decoration: none
  font-weight: 600
  padding: 10px 20px

  display: flex
  justify-content: center
  margin: auto
  margin-top: 20px
  border-radius: 5px
  border: 1px solid #000
  color: #404040
  background-color: #b5b5b5
</style>