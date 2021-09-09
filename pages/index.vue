<template>
  <firebase-auth :class="$style.loginButton"/>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import firebaseAuth from '~/components/FirebaseAuth.vue'
export default defineComponent({
  components: { firebaseAuth },
})
</script>
<style module>
.loginButton {
  margin-top: 20vh;
}
</style>
