<template>
  <Section>
    <Grid>
      <Column width="12">
        <img :src="team.image.team" class="image-team"/>
      </Column>
      <Column width="1"/>
      <Column width="3" padding-right>
        <img :src="team.image.logo" class="image-logo"/>
        <div class="box collapse-top">
          <ButtonContainer align="center" margin="lower">
            <Button primary big fill-width>Message</Button>
          </ButtonContainer>
          <ButtonContainer align="center" margin="lower">
            <Button big fill-width>Voir le numéro</Button>
          </ButtonContainer>
          <ButtonContainer align="center" margin="lower">
            <Link big disabled>Sauvegarder</Link>
          </ButtonContainer>
        </div>
        <div class="box inline-box">
        <div class="box info-box">
          <span class="name">ANNEE DE CREATION</span>
          <span class="value">2010</span>
        </div>
          <div class="box info-box">
            <span class="name">ANNEE DE CREATION</span>
            <span class="value">2010</span>
          </div>
        </div>
      </Column>
      <Column width="7" padding-left>
        <Title bottom-border margin-top type="bold" font="nato">A propos</Title>
        <Paragraph margin="lower">Eminuit autem inter humilia supergressa iam impotentia fines mediocrium delictorum nefanda Clematii cuiusdam Alexandrini nobilis mors repentina; cuius socrus cum misceri sibi generum, flagrans eius amore, non impetraret, ut ferebatur, per palatii pseudothyrum introducta, oblato pretioso reginae monili id adsecuta est, ut ad Honoratum tum comitem orientis.</Paragraph>
        <template v-if="team.sponsors.length > 0">
          <Title bottom-border margin-top type="bold" font="nato">Sponsors</Title>
          <ul class="sponsors-list">
            <li v-for="sponsor of team.sponsors" :v-key="sponsor.slug">
              <img :src="sponsor.image"/>
            </li>
          </ul>
        </template>
        <Title bottom-border margin-top type="bold" font="nato">Objectifs de l’année de la structure</Title>
        <Paragraph margin="lower">Eminuit autem inter humilia supergressa iam impotentia fines mediocrium delictorum nefanda Clematii cuiusdam Alexandrini nobilis mors repentina; cuius socrus cum misceri sibi generum, flagrans eius amore, non impetraret, ut ferebatur, per palatii pseudothyrum introducta, oblato pretioso reginae monili id adsecuta est, ut ad Honoratum tum comitem.</Paragraph>
      </Column>
    </Grid>
    <Section color="grey" padding-top="70" padding-bottom="70">
      <ButtonContainer align="center">
        <Button primary big>Afficher toutes les équipes</Button>
      </ButtonContainer>
    </Section>

    <Menu>
      <LeftList>
        <li class="right-space"><a>KAMNU</a></li>
        <li class="focus"><a>Accueil</a></li>
        <li><a>Notre solution</a></li>
        <li><a>A propos</a></li>
        <li><a>Blog</a></li>
        <li><a>F.A.Q</a></li>
        <li><a>Contacts</a></li>
      </LeftList>
      <RightList>
        <li class="no-bar"><a class="button primary-button">Mon compte</a></li>
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
import Teams from "~/static/teams";
import Footer from '../../components/new-version/footer/index.vue'
import LeftList from '../../components/new-version/util/left-list.vue'
import RightList from '../../components/new-version/util/right-list.vue'
import Title from '../../components/new-version/title.vue'
import ButtonContainer from '../../components/new-version/button/container.vue'
import Link from '../../components/new-version/button/link.vue'
import Button from '../../components/new-version/button/button.vue'
import Section from '../../components/new-version/section.vue'
import Paragraph from '../../components/new-version/paragraph.vue'
import Grid from '../../components/new-version/grid/index.vue'
import Column from '../../components/new-version/grid/cell.vue'
import Menu from '../../components/new-version/menu.vue'

export default Vue.extend({
  components: {
    ButtonContainer,
    Footer,
    LeftList,
    RightList,
    Title,
    Button,
    Link,
    Section,
    Paragraph,
    Grid,
    Column,
    Menu,
  },
  asyncData(params) {
    if (typeof params.params.slug !== "string"){
      return;
    }

    const slug = params.params.slug.trim().toLowerCase();

    for(const team of Teams){
      if (team.slug.trim().toLowerCase() === slug){
        return {
          team: team,
          favorites: [],
        }
      }
    }

    return params.error({ statusCode: 404, message: 'Page not found' });
  },
  beforeMount(): void {
    const favorites_json = window.localStorage.getItem("favorites");
    if (typeof favorites_json === "string"){
      try{
        const favorites_data = JSON.parse(favorites_json);
        const data = Array.isArray(favorites_data) ? favorites_data : [favorites_data];

        // @ts-ignore
        this.favorites.push(... data.filter(item => typeof item === "string" && item.toLowerCase().trim().length > 0).map(item => item.toLowerCase().trim()));
      }catch (e) {

      }
    }

    // @ts-ignore
    this.favorites = this.favorites.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    // @ts-ignore
    window.localStorage.setItem("favorites",JSON.stringify(this.favorites));
  },
  methods: {
    favorite: function () {
      // @ts-ignore
      const _slug = this.team.slug.trim().toLowerCase();

      // @ts-ignore
      const index = this.favorites.indexOf(_slug);
      if (index < 0){
        // @ts-ignore
        this.favorites.push(_slug);
      }else{
        // @ts-ignore
        this.favorites.splice(index,1);
      }

      // @ts-ignore
      this.favorites = this.favorites.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });

      // @ts-ignore
      window.localStorage.setItem("favorites",JSON.stringify(this.favorites));
    },
    back: function(){
      this.$router.back();
    }
  },
  computed: {
    isFavoriteActive: function(){
      // @ts-ignore
      return this.favorites.includes(this.team.slug);
    },
  }
});
</script>
