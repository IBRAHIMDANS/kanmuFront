<template>
  <Section>
    <div class="header section screen-size bg-black triangle-bottom">
      <Grid fill-height>
        <Column vertical-align width="6">
          <Title type="big">Mensarum enim voragines et varias</Title>
          <Paragraph>Kanmu vous présente la première plateforme de mise en relation direct entre Equipes et Marques une solution Saaq complète qui centralise.</Paragraph>
          <ButtonContainer>
            <Button primary big>J'inscris ma marque</Button>
            <Button big>J'inscris mon équipe</Button>
          </ButtonContainer>
        </Column>
      </Grid>
    </div>
    <Section color="white" padding-bottom padding-top triangle-top="normal">
      <Steps :steps="STEPS"/>
    </Section>
    <Section color="black" padding-bottom padding-top triangle-bottom>
      <Grid fill-height>
        <Column vertical-align width="6" padding-right>
          <Title>Regna occupatam Euphratis vero limes</Title>
          <Paragraph quote>«In his tractibus navigerum nusquam visitur flumen sed in locis plurimis aquae suapte natura calentes emergunt ad usus aptae multiplicium medelarum. verum has quoque regiones pari sorte Pompeius Iudaeis domitis et Hierosolymis captis in provinciae speciem dictione.»</Paragraph>
          <ButtonContainer>
            <Button primary big>J'inscris mon équipe</Button>
          </ButtonContainer>
        </Column>
        <Column vertical-align width="6" padding-left>
          <div class="columns-container vertical-center">
            <div class="column-4">
              <div class="bar-statistic">
                <div class="bar-value" style="height:11%">
                  <span class="value">11%</span>
                </div>
              </div>
            </div>
            <div class="column-4">
              <div class="bar-statistic">
                <div class="bar-value" style="height:15%">
                  <span class="value">15%</span>
                </div>
              </div>
            </div>
            <div class="column-4">
              <div class="bar-statistic">
                <div class="bar-value" style="height:60%">
                  <span class="value">60%</span>
                </div>
              </div>
            </div>
          </div>
        </Column>
      </Grid>
    </Section>
    <Section color="grey"  padding-bottom padding-top triangle-top="normal">
      <Grid fill-height>
        <Column vertical-align width="6" padding-right>
            <Title>Donner à votre marque la visibilité qu’elle mérite</Title>
            <Paragraph>Pour créer cette solution nous avons été directement en contact avec différentes associations esportive pour comprendre et répondre à vos besoins. Kanmu vous permettra de donner de la visibilité en ligne à votre structure et de trouver des sponsors pour vous permettre de participer aux différentes compétitions.</Paragraph>
            <ButtonContainer>
              <Link primary>En savoir plus</Link>
            </ButtonContainer>
            <ButtonContainer>
              <Button primary big>J'inscris mon équipe</Button>
            </ButtonContainer>
        </Column>
        <Column vertical-align width="6" padding-left>
          <div class="parallel-images" style="height:500px;">
            <img src="../assets/team.png"/>
            <img src="../assets/team.png"/>
          </div>
        </Column>
      </Grid>
    </Section>
    <Section color="white"  padding-bottom padding-top>
      <Grid fill-height>
        <Column vertical-align width="6" padding-right>
          <img class="vertical-center" src="../assets/team.png"/>
        </Column>
        <Column vertical-align width="6" padding-left>
          <Title>Donner à votre marque la visibilité qu’elle mérite</Title>
          <Paragraph>Pour créer cette solution nous avons été directement en contact avec différentes associations esportive pour comprendre et répondre à vos besoins. Kanmu vous permettra de donner de la visibilité en ligne à votre structure et de trouver des sponsors pour vous permettre de participer aux différentes compétitions.</Paragraph>
          <div class="columns-container section statistic-container">
            <div class="column-4 statistic">
              <span class="value">10,4%</span>
              <span class="label">Tuebatur incende</span>
            </div>
            <div class="column-4 statistic">
              <span class="value">10,4%</span>
              <span class="label">Tuebatur incende</span>
            </div>
            <div class="column-4 statistic">
              <span class="value">10,4%</span>
              <span class="label">Tuebatur incende</span>
            </div>
          </div>
          <ButtonContainer>
            <Link primary>En savoir plus</Link>
          </ButtonContainer>
          <ButtonContainer>
            <Button primary big>J'inscris mon équipe</Button>
          </ButtonContainer>
        </Column>
      </Grid>
    </Section>
    <Section color="grey" padding-bottom padding-top>
      <Grid>
        <div class="column-12">
          <Title type="small" align="center">Ils nous soutiennent</Title>
          <div class="columns-container section sponsors-container">
            <img class="column-4" src="https://www.fillmurray.com/640/360"/>
            <img class="column-4" src="https://www.fillmurray.com/640/360"/>
            <img class="column-4" src="https://www.fillmurray.com/640/360"/>
          </div>
          <Title type="small" align="center">Ils nous soutiennent</Title>
          <p class="paragraph">Marque comme équipe nous souhaitons vous accompagner dans votre aventure dans le milieu de l’esport ! Alors n’hésitez pas à prendre contact directement avec nous, nous répondrons au mieux à vos questions par mail ou par téléphone !</p>
          <ButtonContainer align="center">
            <Button primary big>Contactez-nous</Button>
          </ButtonContainer>
        </div>
      </Grid>
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
  import Footer from '../components/new-version/footer/index.vue'
  import LeftList from '../components/new-version/util/left-list.vue'
  import RightList from '../components/new-version/util/right-list.vue'
  import Title from '../components/new-version/title.vue'
  import ButtonContainer from '../components/new-version/button/container.vue'
  import Link from '../components/new-version/button/link.vue'
  import Button from '../components/new-version/button/button.vue'
  import Section from '../components/new-version/section.vue'
  import Paragraph from '../components/new-version/paragraph.vue'
  import Grid from '../components/new-version/grid.vue'
  import Column from '../components/new-version/column.vue'
  import Menu from '../components/new-version/menu.vue'

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
    data(){
      return {
        STEPS: [
          {title: 'Inscription',description: 'Quae dum ita struunt, indicatum est apudap'},
          {title: 'Matching optimisé',description: 'Quae dum ita struunt, indicatum est apudap'},
          {title: 'Mise en relation',description: 'Quae dum ita struunt, indicatum est apudap'},
          {title: 'Signature de contrat',description: 'Quae dum ita struunt, indicatum est apudap'},
        ]
      }
    }
  })
</script>
