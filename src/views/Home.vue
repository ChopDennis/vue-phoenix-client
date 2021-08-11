<template>
  <hello-world />
</template>

<script>
import HelloWorld from '../components/HelloWorld'
import { homeMetaInfo } from '../scripts/meta'

export default {
  name: 'Home',

  components: {
    HelloWorld,
  },
  metaInfo() {
    return homeMetaInfo
  },
}
</script>
