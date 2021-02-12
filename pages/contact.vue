<template>
  <Section>
    <Section color="black" padding-top="150" padding-bottom="150" triangle-bottom>
      <Grid>
        <Column width="6">
          <Title type="big">Nous sommes, A votre écoute</Title>
        </Column>
      </Grid>
    </Section>
    <Section triangle-top="normal" padding-bottom="50" padding-top="50">
      <Grid>
        <Column width="6">
          <Paragraph bold>N'hésitez pas à nous écrire ou nous appeler :</Paragraph>
          <Paragraph margin="no">Email : email@esport-kanmu.com</Paragraph>
          <Paragraph margin="no">Tel : 06 40 55 67 87</Paragraph>
        </Column>
        <Column width="6">
          <form>
            <Input name="name" :value="name" @change="updateName" placeholder="Votre nom et prénom" label="Bonjour, je m'appelle"/>
            <Input name="subject" :value="subject" @change="updateSubject" placeholder="Votre sujet" label="J'aimerai beaucoup"/>
            <Input type="plain" name="message" :value="message" @change="updateMessage" placeholder="Votre message" label="Voici quelques informations supplémentaires à ce propos (facultatif) :"/>
            <Input name="email" :value="email" type="email" @change="updateEmail" placeholder="name@exemple.com" label="Vous pouvez me contacter à cette adresse :"/>
            <Input name="phone" inline :value="phone" type="tel" @change="updatePhone" placeholder="+33 6 XX XX XX XX" label="Ou à ce numéro: "/>
            <ButtonContainer>
              <Button big primary>Être re-contacter</Button>
            </ButtonContainer>
          </form>
        </Column>
      </Grid>
    </Section>
    <Menu>
      <LeftList>
        <li class="right-space"><a>KAMNU</a></li>
        <li><a>Accueil</a></li>
        <li><a>Notre solution</a></li>
        <li><a>A propos</a></li>
        <li><a>Blog</a></li>
        <li><a>F.A.Q</a></li>
        <li><a>Contacts</a></li>
      </LeftList>
      <RightList>
        <li><a class="button primary-button">Mon compte</a></li>
      </RightList>
    </Menu>
    <Footer>
      <LeftList>
        <li><a>Amplificatis</a></li>
        <li><a>Ardore tuebatur</a></li>
        <li><a>Urbium</a></li>
        <li><a>Ardore tuebatur</a></li>
        <li><a>Amplificatis</a></li>
      </LeftList>
      <RightList>
        <li>Suivez-nous: </li>
      </RightList>
    </Footer>
  </Section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Footer from '../components/new-version/footer/index.vue'
  import LeftList from '../components/new-version/util/left-list.vue'
  import RightList from '../components/new-version/util/right-list.vue'
  import Title from '../components/new-version/title.vue'
  import ButtonContainer from '../components/new-version/button/container.vue'
  import Input from '../components/new-version/input.vue'
  import Button from '../components/new-version/button/button.vue'
  import Section from '../components/new-version/section.vue'
  import Paragraph from '../components/new-version/paragraph.vue'
  import Grid from '../components/new-version/grid/index.vue'
  import Column from '../components/new-version/grid/cell.vue'
  import Menu from '../components/new-version/menu.vue'

  export default Vue.extend({
    components: {
      Input,
      Button,
      ButtonContainer,
      Paragraph,
      LeftList,
      RightList,
      Menu,
      Footer,
      Section,
      Grid,
      Column,
      Title,
    },
    data(){
      return {
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: "",
      }
    },
    methods: {
      updateName: function(value){
        this.name = value;
      },
      updateSubject: function(value){
        this.subject = value;
      },
      updateMessage: function(value){
        console.log(value);
        this.message = value;
      },
      updatePhone: function(value){
        this.phone = value;
      },
      updateEmail: function(value){
        this.email = value;
      }
    }
  })
</script>
