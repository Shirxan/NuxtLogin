<template>
    <div>
        <HomeheaderVue/>
        <HomesectionVue/>
        <HomecardVue/>

    </div>
</template>
<script setup>
import HomeheaderVue from '~~/components/Homeheader.vue';
import HomesectionVue from '~~/components/Homesection.vue';
import HomecardVue from '~~/components/Homecard.vue';
definePageMeta({
    layout: 'default'
  })
</script>