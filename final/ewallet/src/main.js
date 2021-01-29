import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      card: [{
        id: "432984728397",
        holder: "Ali Gawad",
        vendor: "ninja",
        number: "1252 1307 3385 2231",
        validMonth: "12",
        validDay: "05",
        img: "ninja",
        color: "#ffffff",
        bgcolor: "#2d2d2d"
      },
      {
        id: "634934721327",
        holder: "Eddison Smith",
        vendor: "Block Chain",
        number: "9081 2213 7261 9982",
        validMonth: "11",
        validDay: "29",
        img: "blockchain",
        color: "#ffffff",
        bgcolor: "#a06de8"
      },
      {
        id: "990182568009",
        holder: "Gustav Karl",
        vendor: "bitcoin",
        number: "6721 4455 6642 1120",
        validMonth: "02",
        validDay: "08",
        img: "bitcoin",
        color: "#ffffff",
        bgcolor: "#e8d843"
      },
      {
        id: "792098668067",
        holder: "Albert Smith",
        vendor: "Evil",
        number: "0009 1112 3125 3505",
        validMonth: "08",
        validDay: "16",
        img: "evil",
        color: "#ffffff",
        bgcolor: "#ff5252"
      }
    ]
    }
  },
  methods: {
    addcard(data) {
      this.card.push(data)
    }
  },

  router,
  render: h => h(App)
}).$mount('#app')
