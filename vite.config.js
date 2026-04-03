import { defineConfig } from 'vite'
import purgecss from 'vite-plugin-purgecss'

export default defineConfig({
  // Cambia 'PW2OPVDRYWALL' por el nombre exacto de tu repositorio en GitHub
  base: '/PW2OPVDRYWALL/',

  build: {
    cssMinify: true,
    rollupOptions: {
      input: {
        main:              'index.html',
        acercaDe:          'html/acercaDe.html',
        contactenos:       'html/contactenos.html',
        formRegistro:      'html/formRegistro.html',
        galeria:           'html/galeria.html',
        nuestrosProgramas: 'html/nuestrosProgramas.html',
        porqueOpv:         'html/porqueOpv.html',
        preguntasFrecuentes: 'html/preguntasFrecuentes.html',
        terminosYcondiciones: 'html/terminosYcondiciones.html',
        testimonios:       'html/testimonios.html',
      }
    }
  },

  plugins: [
    purgecss({
      content: [
        './index.html',
        './html/**/*.html',
        './javascript/**/*.js',
      ],
    }),
  ],
})
