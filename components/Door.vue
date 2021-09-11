<template>
    <div :class="$style.doorWrapper" @click="doorClicked">
        <div :class="$style.door" :style="{ backgroundColor: detectDoorStatus }">
            <div :class="$style.knob" />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, toRefs } from '@nuxtjs/composition-api'
export default defineComponent({
    props: {
        doorStatus: {
            type: Boolean,
            default: false
        }
    },
    emits: ['clickDoor'],
    setup(props, context) {
        const { doorStatus } = toRefs(props)
        const doorClicked = () => {
            context.emit('doorClicked')
        }
        const detectDoorStatus = computed(() => {
            return doorStatus.value ? "gray" : "brown"
        })
        return {
            doorClicked,
            detectDoorStatus
        }
    }
})
</script>
<style module>
/* ドア関連 */
.doorWrapper {
    float: left;
    width: 10vw;
    height: calc(23vw + 1px);
}
.door {
    width: 10vw;
    height: calc(23vw + 1px);
    background-color: brown; 
    position: relative;
    z-index: 0;
    border-top: 1px solid;
}
.knob {
    position: relative;
    top: 11vw;
    left: 1vw;
    height: 1vw;
    width: 1vw;
    border-radius: 50%;
    background-color: black;
    z-index: 1;
}
</style>