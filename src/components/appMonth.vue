<template>
  <div>
    <input type="text" v-model="searchStr" />
    <p v-for="month in monthFilter" v-bind:key="month.name">
      {{ month.name }}
    </p>
  </div>
</template>

<script>
import MonthMixin from '../listMixin';

export default {
  name: "App",
  mixins: [MonthMixin],
  data(){
      return{
          months: [
                {name: 'april'},
                {name: 'march'},
                {name: 'june'},
              ],
      }
  }
};
</script>
<style scoped>
div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
p,input{
  margin: 5px 0 5px 0;
} 
</style>

