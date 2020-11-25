<template>
  <div>
    <FormContainer :image="require('../assets/background/register.png')">
      <FormHead title="Kamnu" description="Prêt à participer à la révolution e-sport ?"/>
      <form>
        <FormInput label="Prénom" name="first_name"/>
        <FormInput label="Nom" name="last_name"/>
        <FormInput label="Adresse E-mail" name="email" type="email"/>
        <FormInput label="Mot de passe" name="password" type="password"/>
        <FormCheckbox label="En cochant cette case, j'accepte et je reconnais avoir pris des Conditions générales d'utilisations ainsi que sa politique de confidentialité."/>
        <div class="centered-button">
          <Button big filled>S'inscrire</Button>
        </div>
        <div class="centered-button">
          <a class="link" href="/login">J'ai déjà un compte ! Me connecter</a>
        </div>
      </form>
    </FormContainer>
    <Menu/>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
// @ts-ignore
import FormContainer from '~/components/form/index.vue'
import FormHead from '~/components/form/head.vue'
import FormInput from '~/components/form/input.vue'
import FormCheckbox from '~/components/form/checkbox.vue'
import Menu from "~/components/util/Menu.vue";
import Button from "~/components/util/button.vue";

export default Vue.extend({
  components: {
    FormContainer,
    FormHead,
    FormInput,
    FormCheckbox,
    Menu,
    Button,
  },
})
</script>

<style>
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

