import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import FeedDetails from '../components/FeedDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio/casamentos/585392-casamento-adri-orlando-sermarisol-jaragua-do-sul-sc',
      name: 'FeedDetails',
      props: { id: '1' },
      component: FeedDetails
    },
    {
      path: '/portfolio/smashthecake/629874-smash-the-cake-mario-1-aninho-parque-malwee-jaragua-do-sul',
      name: 'FeedDetails',
      props: { id: '1' },
      component: FeedDetails
    },
    {
      path: '/portfolio/ensaio-feminino/629637-ensaio-feminino-leia-em-corupa',
      name: 'FeedDetails',
      props: { id: '1' },
      component: FeedDetails
    },    
    {
      path: '/portfolio/ensaio-feminino/629615-ensaio-feminino-mariana-e-o-fusca-rudolf-em-schoeder',
      name: 'FeedDetails',
      props: { id: '1' },
      component: FeedDetails
    }    
    
    
  ]
})
