<template>
    <div>
        <indoor-map ref="componentRef" :is-master-light-on="isMasterLightOn"/>
        <image-button :class="$style.light" :image-url="lightImage" @imageClicked="imageClicked('light')"/>
        <image-button :class="$style.aircon" :image-url="airconImage" />
        <image-button :class="$style.key" :image-url="keyImage" @imageClicked="imageClicked('key')"/>
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
    setup() {
        const lightOn = 'lightOn.png'
        const lightOff = 'lightOff.png'
        const isMasterLightOn = ref(false)
        const lightImage = ref('lightOff.png')
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
            console.info(`全ての電気 ${isMasterLightOn.value ? 'オン' : 'オフ'}`)
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