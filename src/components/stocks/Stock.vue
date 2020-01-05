<template>
<div class="col-sm-3 col-md-4 custom">
     <div class="card">
     <div class="card-header bg-success text-white">
     <h7 class="card-title bg-success">
        <strong>{{stock.name}}</strong> (Cena: {{stock.price}})
     </h7>
 </div>
 <div class="card-body">
    <div class="form-inline">  
               <input type="number"
                class="form-control mr-1"
                 placeholder="Počet"
                 v-model="quantity"
                 :class="{danger: nejsouPenize}"
                 >
               <button class="btn btn-success"
              @click="buyStock"
              :disabled="nejsouPenize || quantity <=0"
               >{{ nejsouPenize? 'Nejsou Peníze' : 'Koupit' }}</button>
    </div>
 </div>
 </div>
 </div>
 </template>
<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>

 <script>
  export default{
    props: ['stock'],
    data(){
      return {quantity:0}
    },
    computed:{
      funds(){
        return this.$store.getters.funds;
      },
      nejsouPenize(){
        return this.quantity * this.stock.price > this.funds;
      }
    },
    methods:{
      buyStock(){
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: +this.quantity
        };
        this.$store.dispatch('buyStock',order)
        this.quantity=0;
      }
    }
  }
 </script>


<style>
.custom{
  margin-bottom:10px;
  margin-top: 10px;
}
</style>