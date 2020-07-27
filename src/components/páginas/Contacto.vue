<template>
  <b-container class="bv-example-row">
    <b-form @submit="onSubmit" @reset="onReset">
    <b-row align-h="center">
        <b-col  md="6" class="nome">
          <p class="text2"> Para dúvidas, contacte-nos:</p>
          <b-form-group label="*Nome:"  label-for="nome" label-align="left">
            <b-form-input id="nome"  v-model="text" placeholder="Enter your name"></b-form-input>
          </b-form-group>
        </b-col>
    </b-row>

    <b-row align-h="center">
        <b-col  md="6" class="email">
           <b-form-group label="*Email:"  label-for="email" label-align="left">
            <b-form-input id="email"  v-model="email" placeholder="Enter your email"></b-form-input>
          </b-form-group>
        </b-col>
    </b-row>

    <b-row align-h="center">
        <b-col  md="6" class="tel">
          <b-form-group label="*Telefone:"   label-for="tel" label-align="left">
            <b-form-input id="tel" type="number" v-model="tel" placeholder="Enter your tel"></b-form-input>
          </b-form-group>
        </b-col>
    </b-row>

    <b-row align-h="center">
        <b-col  md="6" class="textarea">
          <b-form-group label="*Mensagem:"  label-for="textarea" label-align="left">
            <b-form-textarea id="textarea" v-model="mensagem" placeholder="Enter your message"></b-form-textarea>
          </b-form-group>
        </b-col>
    </b-row>

    <div class="botao">
      <b-button variant="outline-info" type="submit">Enviar</b-button>
    </div>

</b-form>    

    <iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26631.154489424327!2d-70.6760310158102!3d-33.45205996297091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5061664cc23%3A0x7c797ae247d38105!2sSantiago%2C%20Chile!5e0!3m2!1spt-BR!2sbr!4v1595779447201!5m2!1spt-BR!2sbr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </b-container>

</template>

<script>
  export default {
    data() {
      return {
        text: '',
        email: '',
        tel: ''
      }
    }
  }
</script>

<style>
  .nome{
    margin-top: 30px;
  }
  .email{
    margin-top: 20px;
  }
  .tel{
    margin-top: 20px;
  }
  .textarea{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .text2{
    text-align: center;
    font-size:20px;
    padding: 0;
  }
  .mapa{
    margin-bottom: 30px;
    margin-top: 25px;
  }
  .botao{
    margin-left: 475px;
    margin-bottom: 30px;
   padding: 0;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
</style>