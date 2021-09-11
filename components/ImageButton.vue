<template>
   <div :style="{ width: imageWidth, height: imageHeight}" @click="imageClicked">
       <div :style="{ backgroundImage: generatedImageUrl }" :class="$style.buttonImage"/>
    </div> 
</template>
<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
    props: {
        imageUrl: {
            type: String,
            default: '~/assets/noImage.png',
        },
        switchImageUrl: {
            type: String,
            default: '~/assets/switchNoImage.png'
        },
        imageWidth: {
            type: String,
            default: '32vw'
        },
        imageHeight: {
            type: String,
            default: '32vw'
        }    
    },
    emits: ['imageClicked'],
    setup(props, context) {
        const imageClicked = () => {
            context.emit('imageClicked')
        }
        const generatedImageUrl = computed(() => {
            return "url(" + props.imageUrl + ")"
        })
        
        return {
            imageClicked,
            generatedImageUrl
        }
    },
})
</script>
<style module>
.buttonImage {
    width: 100%;
    height: 100%;
    background-size:contain;
    background-repeat: no-repeat;
    background-position: center;
}
</style>