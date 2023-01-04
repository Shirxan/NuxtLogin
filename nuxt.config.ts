// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    
    typescript: {
        strict: true
    },

    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                {charset: "utf-8"},
                {name: "viewport", content: "width=device-width, initial-scale=1"},
                {hid: "description", name: "description", content: ""},
                {name: "format-detection", content: "telephone=no"},
            ],
            link:[
                {href:'public/assets/css/style.css',rel:"stylesheet"},
                {href:'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',rel:"stylesheet"},
        
            ],
            
        }
    }

})
