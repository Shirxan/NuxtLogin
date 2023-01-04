<template>
    <div>
        <AboutheaderVue/>
        <AboutcardVue/>
        <AboutsectionVue/>

    </div>
</template>
<script setup>
import AboutheaderVue from '~~/components/Aboutheader.vue';
import AboutcardVue from '~~/components/Aboutcard.vue';
import AboutsectionVue from '~~/components/Aboutsection.vue';

  definePageMeta({
    layout: 'default'
  })

</script>