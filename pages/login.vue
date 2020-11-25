<template>
  <div>
    <FormContainer  :image="require('../assets/background/login.png')">
      <FormHead title="Kamnu" description="Prêt à participer à la révolution e-sport ?"/>
      <form>
        <FormInput label="Adresse E-mail" name="email" type="email"/>
        <FormInput label="Mot de passe" name="password" type="password"/>
        <div class="split">
          <div class="col">
            <FormCheck label="Se souvenir de moi"/>
          </div>
          <div class="col">
            <a class="link">Mot de passe oublié</a>
          </div>
        </div>
        <div class="centered-button" style="margin-top:20px;">
          <Button big filled href="/login">Connexion</Button>
          <Button big href="/register">Inscription</Button>
        </div>
      </form>
    </FormContainer>
    <Menu/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import FormContainer from '~/components/form/index.vue'
import FormHead from '~/components/form/head.vue'
import FormInput from '~/components/form/input.vue'
import FormCheck from '~/components/form/checkbox.vue'
import Menu from "~/components/util/Menu.vue";

export default Vue.extend({
  components: {
    FormContainer,
    FormHead,
    FormInput,
    FormCheck,
    Menu,
  },
})
</script>
<style>
.split{
  width:100%;
  height:auto;
  display:flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
}
.split .col{
  width:100%;
  height:auto;
  display: inline-block;
  text-align: center;
  flex-shrink: 1;
  flex-grow: 1;
}


.centered-button{
  width:100%;
  height:auto;
  text-align: center;
}
.link{
  width:auto;
  height:auto;
  display:inline-block;
  text-decoration: underline;
  text-align: center;
  font-size:12px;
  color:rgb(0,0,0);
  font-weight: bold;
}
</style>

