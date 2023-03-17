import { useSanityClient } from 'vue-sanity'

export default {
  name: 'App',
  setup() {
    useSanityClient({
      projectId: '65ba4794',
      dataset: 'production',
      useCdn: process.env.NODE_ENV === 'production',
    })
  },
}