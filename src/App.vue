<template>
  <div id="app">
    <h1>
      {{ msg | lowercase}}
    </h1>
    <h1>
      {{ msg | slice(1,8) | uppercase}}
    </h1>
    <h1>
      {{ msg | slice(1,8)}}
    </h1>
    <input type="text" v-model="searchStr">
    <p v-for="month in monthFilter" v-bind:key="month.name">
      {{month.name}}
    </p>
    <app-month>
    </app-month>
  </div>
</template>

<script>
import MonthMixin from './listMixin';

export default {
  name: 'App',
  mixins:[MonthMixin],
  data(){
    return{
      msg: 'Hello its LB 33.',
    }
  },
  filters:{
    lowercase(str){
      return str.toLowerCase();
    },
    slice(str, index1, index2){
      return str.slice(index1,index2);
    }
  },
  computed:{
    monthFilter(){
      return this.searchStr === ""
        ? this.months
        : this.months.filter(item => !item.name.toLowerCase().indexOf(this.searchStr.toLowerCase()));
    }
  }
}
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

