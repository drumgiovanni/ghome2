<template>
    <div :class="$style.lightWrapper" @click="lightClicked">
        <div :class="$style.triangle" />
        <div :class="$style.circle" :style="{ backgroundColor: detectLightStatus}"/>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
    props: {
        lightStatus: {
            default: false
        }
    },
    emits: ['lightClicked'],
    setup(props, context) {
        const { lightStatus } = toRefs(props)
        const detectLightStatus = computed(() => {
            return lightStatus.value ? "yellow" : "whitesmoke"
        })
        const lightClicked = () => {
            context.emit('lightClicked')
        }
        return {
            detectLightStatus,
            lightClicked
        }
    },
})
</script>

<style module>
/* 電気関連 */
.lightWrapper {
    height: 7vw;
    width: 4vw;
    float: left;
}
.triangle {
    text-align: center;
    width: 4vw;
    height: 4vw;
    background:
        linear-gradient(to bottom right, rgba(255,255,255,0) 50%, #DDDDDD 50.5%) no-repeat top left/50% 100%,
        linear-gradient(to bottom left, rgba(255,255,255,0) 50%, #DDDDDD 50.5%) no-repeat top right/50% 100%;
    margin: 0 auto 0 auto;
    display: block;
    position: relative;
    z-index: 1;
}
.circle {
    width: 4vw;
    height:4vw;
    border-radius: 50%;
    position: relative;
    top: -1vw;
    z-index: 0;
}
</style>