<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <ul class="navbar-nav mr-auto ">
      <router-link to="/portfolio" activeClass="nav-item active" tag="li">
        <a class="nav-link">Portfolio</a>
      </router-link>
      <router-link to="/stocks" activeClass="nav-item active" tag="li">
        <a class="nav-link">Stocks</a>
      </router-link>
    </ul>

    <!-- Collapse button -->
    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>-->

    <!-- Navbar links -->
    <div class="navbar-nav" id="collapsibleNavbar">
           <ul class="navbar-nav ml-auto">
        <strong class="navbar-text ">Funds: {{funds | mena}}</strong>

              <li class="nav-item active">
          <a class="nav-link" @click="endDay" href="#">End Day</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" @click="saveData" href="#">Save</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" @click="loadData" href="#">Load</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  computed:{
    funds(){
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions([
      'randomizeStocks'
    ]),
    endDay(){
      this.randomizeStocks();

    },
    saveData(){
      const data ={
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
     this.$http.put('data.json', data)
                    .then(response => {
                        console.log(response)
                        }, error => {
                            console.log(error)
                        });
            }
    }
  }
</script>

