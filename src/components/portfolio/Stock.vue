<template>
<div class="col-sm-3 col-md-4 custom">
     <div class="card">
     <div class="card-header bg-info text-white">
     <h7 class="card-title bg-info">
       <strong>{{stock.name}}</strong>
        Počet: {{stock.quantity}}, Cena ks {{stock.price}}
     </h7>
 </div>
 <div class="card-body">
    <div class="form-inline">  
               <input type="number"
                class="form-control mr-1"
                 placeholder="Počet"
                 v-model="quantity">
               <button class="btn btn-info"
              @click="sellStock"
              :disabled="nedostatekMnozstvi || quantity <=0"
               >{{nedostatekMnozstvi ? 'Nelze prodat' : 'Prodat'}}</button>
    </div>
 </div>
 </div>
 </div>

 </template>
 <script>
import {mapActions} from 'vuex';

  export default{
    props: ['stock'],
    data(){
      return {quantity:0}
    },
    compupted:{
        nedostatekMnozstvi(){
            return this.quantity > this.stock.quantity;
        }
    },
    methods:{
        ...mapActions({
            placeSellOrder: 'sellStock'
        }),
        sellStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.placeSellOrder(order);
             this.quantity = 0;
        }
    }
  }
 </script>