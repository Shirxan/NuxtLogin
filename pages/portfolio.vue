<template>
    <div>
        <PorttitleVue/>
        <PortcardVue/>
        
    </div>
</template>
<script setup>
import PorttitleVue from '~~/components/Porttitle.vue';
import PortcardVue from '~~/components/Portcard.vue';
definePageMeta({
    layout: 'default'
  })
</script>