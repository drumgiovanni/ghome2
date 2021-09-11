<template>
    <div>
        <indoor-map :isMasterLightOn="isMasterLightOn" ref="componentRef"/>
        <image-button :class="$style.light" :imageUrl="lightImage" @imageClicked="imageClicked('light')"/>
        <image-button :class="$style.aircon" :imageUrl="airconImage" />
        <image-button :class="$style.key" :imageUrl="keyImage" @imageClicked="imageClicked('key')"/>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import IndoorMap from '~/components/IndoorMap.vue';
interface RefType extends Vue {
    masterKeyClicked(): void
    masterLightClicked(): void
}
export default defineComponent({
    setup(_, context) {
        const lightOn = 'lightOn.png'
        const lightOff = 'lightOff.png'
        let isMasterLightOn = ref(false)
        let lightImage = ref('lightOff.png')
        const airconImage = 'aircon.png' 
        const keyImage = 'key.png'
        const componentRef = ref<InstanceType<typeof IndoorMap>>()
        const masterLightClicked = () => {
            const comp = componentRef.value as RefType
            comp.masterLightClicked()
        }
        const masterKeyClicked = () => {
            const comp = componentRef.value as RefType
            comp.masterKeyClicked()
        }
        const imageClicked = (trigger:string) => {
            switch(trigger) {
                case 'light':
                    switchLight()
                    break
                case 'key':
                    switchLock()
                    break
            }
        }
        const switchLight = () => {
            lightImage.value = lightImage.value === lightOn ? lightOff : lightOn
            isMasterLightOn.value = !isMasterLightOn.value
            masterLightClicked()
            console.log(`全ての電気 ${isMasterLightOn.value ? 'オン' : 'オフ'}`)
        }
        const switchLock = () => {
            masterKeyClicked()
        }
        return {
            lightImage,
            airconImage,
            keyImage,
            imageClicked,
            switchLight,
            isMasterLightOn,
            componentRef,
            masterLightClicked,
            masterKeyClicked,
            switchLock
        }
    }
})
</script>
<style module>
.light {
    float: left;
}
.aircon {
    float: left;
}
.key {
    float:left;
}
</style>