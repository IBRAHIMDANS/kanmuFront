<template>
  <Section>
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
  import Link from '../components/new-version/button/link.vue'
  import Button from '../components/new-version/button/button.vue'
  import Section from '../components/new-version/section.vue'
  import Paragraph from '../components/new-version/paragraph.vue'
  import Grid from '../components/new-version/grid.vue'
  import Column from '../components/new-version/column.vue'
  import Menu from '../components/new-version/menu.vue'

  export default Vue.extend({
    components: {
      LeftList,
      RightList,
      Menu,
      Footer,
      Section,
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
