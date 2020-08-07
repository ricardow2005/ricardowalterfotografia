<template>

  <section id="feed">
    

    <feed>
      <slot />
    </feed>
    
   <!-- <gallery>
      <slot />
    </gallery>  -->

  </section>
  
</template>

<script>
  import baseSubheading from '../base/Subheading.vue'
  export default {
    name: 'HomeAbout',

    components: {
      Feed: () => import('@/components/Feed'),
      Gallery: () => import('@/components/Gallery'),
    },
  }
</script>
