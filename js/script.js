/*
- Creare la variabile Vue;


*/

const {createApp} = Vue;


createApp({
  data(){
    return{
    message: 'Hello World!'
    }
  }
}).mount('#app');

