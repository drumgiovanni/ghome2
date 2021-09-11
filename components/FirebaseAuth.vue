<template>
    <div>
        <div id="firebaseui-auth-container" />
    </div>
</template>
<script lang="ts">
import { 
    defineComponent,
    onMounted,
    useContext,
    useRouter
} from '@nuxtjs/composition-api'
import firebase from 'firebase'
export default defineComponent({
    setup() {
        const { $fire, $config } = useContext()
        const router  = useRouter()
        const auth = $fire.auth
        onMounted(() => {
            const firebaseui = require('firebaseui')
            auth.onAuthStateChanged((user) => {
                if(!user) {
                    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
                    const config = {
                        signInOptions: [
                           firebase.auth.GoogleAuthProvider.PROVIDER_ID
                        ],
                        callbacks: {
                            signInSuccessWithAuthResult: (authResult:any) => {
                                if ($config.giovanniUid.includes(authResult.user.uid)) {
                                    return true
                                } else {
                                    auth.signOut()
                                    return false
                                }
                            }
                        },
                        signInSuccessUrl: '/home',
                        signInFlow: 'popup'
                    }
                    ui.start('#firebaseui-auth-container', config)
                } else if ($config.giovanniUid.includes(user.uid)) {
                        router.push('/home')
                    } else {
                        auth.signOut()
                    }
            })
        }) 
    },
})
</script>
<style src="firebaseui/dist/firebaseui.css" />

</style>