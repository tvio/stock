<template>
  <div>
      <h1>Trade or Veiw your Portfolio</h1>
      <h6>You ma save & load data</h6>
      <h6>Click on 'End Day' to begin new day</h6>
      <hr>
      <p>Your funds: {{funds| mena}}</p>
  </div>
</template>

<script>
 export default {
     computed:{
         funds(){
             return this.$store.getters.funds;
         }
     }
 }

</script>