<template>
  <b-container class="bv-example-row">
    <b-row align-h="center">
        <b-col  md="6" class="nome">
          <p class="text2"> Para dúvidas, contacte-nos:</p>
          <b-form-group label="Nome:" label-cols-md="2" label-for="nome" label-align="left">
            <b-form-input id="nome"  v-model="text" placeholder="Enter your name"></b-form-input>
          </b-form-group>
        </b-col>
        
    </b-row>
        <b-col  md="6" class="email">
           <b-form-group label="Email:" label-cols-md="2" label-for="email" label-align="left">
            <b-form-input id="email"  v-model="text" placeholder="Enter your email"></b-form-input>
          </b-form-group>
        </b-col>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        text: ''
      }
    }
  }
</script>

<style>
  .nome{
    margin-top: 30px;
  }
  .email{
    margin-top: 10px;
    margin-left: 270px;
  }
  .text2{
    text-align: center;
    font-size:20px;
    padding: 0;
  }
</style>