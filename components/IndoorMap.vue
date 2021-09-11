<template>
    <div :class="$style.mapWrapper">
        <div :class="$style.square">
            <div :class="$style.ceiling">
                <light :id="$style.livingLight" @lightClicked="clickLight('living')" :lightStatus="state.isLivingLightOn" />
                <door :id="$style.livingDoor" />
                <light :id="$style.thirdFloorCentrLight" @lightClicked="clickLight('floor3')" :lightStatus="state.isFloor3LightOn" />
                <door :id="$style.officeDoor" />
                <light :id="$style.officeLight" @lightClicked="clickLight('office')" :lightStatus="state.isOfficeLightOn" />
            </div>
            <div :class="$style.floor">
                <div :class="$style.leftStairs" />
                <light :id="$style.secondFloorStairsLight" @lightClicked="clickLight('floor2')" :lightStatus="state.isFloor2LightOn" />
                <light :id="$style.secondFloorCentrLight"  @lightClicked="clickLight('floor2')" :lightStatus="state.isFloor2LightOn" />
                <door :id="$style.bedroomDoor" />
                <light :id="$style.bedroomLight" @lightClicked="clickLight('bedroom')" :lightStatus="state.isBedroomLightOn" />
            </div>
            <div :class="$style.floor">
                <door :id="$style.entranceDoor" @doorClicked="clickDoor" :doorStatus="state.isEntranceOpen"/>
                <light :id="$style.entranceLight" @lightClicked="clickLight('floor1')" :lightStatus="state.isFloor1LightOn" />
                <light :id="$style.firstFloorStairsLight" @lightClicked="clickLight('floor1')" :lightStatus="state.isFloor1LightOn" />
                <div :class="$style.rightStairs" />
            </div>
            <div :class="$style.floor" />
        </div>
    </div>
</template> <script lang="ts">
import { 
    defineComponent,
    reactive,
    toRefs
} from '@nuxtjs/composition-api'

interface State {
    isLivingLightOn: boolean
    isFloor3LightOn: boolean
    isOfficeLightOn: boolean
    isFloor2LightOn: boolean
    isBedroomLightOn: boolean
    isFloor1LightOn: boolean
    isEntranceOpen: boolean
}

export default defineComponent({
    props: {
        isMasterLightOn: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        const { isMasterLightOn } = toRefs(props)
        const state = reactive<State>({
            isLivingLightOn: false,
            isFloor3LightOn: false,
            isOfficeLightOn: false,
            isFloor2LightOn: false,
            isBedroomLightOn: false,
            isFloor1LightOn: false,
            isEntranceOpen: false
        })
        const clickLight = (place:string) => {
            switch(place) {
                case 'living':
                    state.isLivingLightOn = !state.isLivingLightOn
                    console.log(`リビング 電気 ${state.isLivingLightOn ? "オン" : "オフ"}`)
                    break
                case 'floor3':
                    state.isFloor3LightOn = !state.isFloor3LightOn
                    console.log(`３階 電気 ${state.isFloor3LightOn ? "オン" : "オフ"}`)
                    break
                case 'office':
                    state.isOfficeLightOn = !state.isOfficeLightOn
                    console.log(`書斎 電気 ${state.isOfficeLightOn ? "オン" : "オフ"}`)
                    break
                case 'floor2':
                    state.isFloor2LightOn = !state.isFloor2LightOn
                    console.log(`２階　電気 ${state.isFloor2LightOn ? "オン" : "オフ"}`)
                    break
                case 'bedroom':
                    state.isBedroomLightOn = !state.isBedroomLightOn
                    console.log(`寝室 電気 ${state.isBedroomLightOn ? "オン" : "オフ"}`)
                    break
                case 'floor1':
                    state.isFloor1LightOn = !state.isFloor1LightOn
                    console.log(`１階 電気 ${state.isFloor1LightOn ? "オン" : "オフ"}`)
                    break
            }
        }
        const clickDoor = () => {
            state.isEntranceOpen = !state.isEntranceOpen
            console.log(`入口ドア ${state.isEntranceOpen ? "解錠" : "施錠"}`)
        }
        const masterKeyClicked = () => {
            state.isEntranceOpen = !state.isEntranceOpen
            console.log(`入口ドア ${state.isEntranceOpen ? "解錠" : "施錠"}`)

        }
        const masterLightClicked = () => {
            (Object.keys(state) as (keyof State)[]).forEach((k)=> {
                if(k === "isEntranceOpen") { return }
                state[k] = isMasterLightOn.value ? false : true
            })
        }
        return {
            state,
            clickLight,
            clickDoor,
            masterLightClicked,
            masterKeyClicked
        }
    }
})
</script>
<style module>
/* 家内マップ */
.mapWrapper {
    margin: 5vh 1vw;
}
.square {
    width: 90vw;
    height: 90vw;
    border: 1px solid;
}
.ceiling {
    border-bottom: 1px solid;
    width: 84vw;
    margin: 18vw 3vw 0 3vw;
}
.floor {
    border-bottom: 1px solid;
    width: 84vw;
    margin: 23vw 3vw 0 3vw;
}

/* 電気関連 */
#livingLight {
    position: relative;
    top: 0;
    left: 3vw;
}
#thirdFloorCentrLight {
    margin-left: 18vw;
}
#officeLight {
    margin-left: 4vw;
}
#secondFloorStairsLight {
    margin-left: -1vw;
}
#secondFloorCentrLight {
    margin-left: 18vw;
}
#bedroomLight {
    margin-left: 4vw;
}
#entranceLight {
    margin-left: 4vw;
}
#firstFloorStairsLight {
margin-left: 33vw;
}

/* ドア関連 */
#livingDoor {
   margin-left: 8vw;
}
#officeDoor {
    margin-left: 18vw;
}
#bedroomDoor {
    margin-left: 7vw;
}
#entranceDoor {
    margin-left: 0;
}

/* 階段 */
.leftStairs {
    float:left;
    text-align: center;
    width: 9vw;
    height: calc(23vw + 1px);
    background:
        linear-gradient(to bottom left, transparent, transparent 49%, black 51%, black 51%, transparent 51%, transparent);
    margin: 0 auto 0 21vw;
    display: block;
    position: relative;
}
.rightStairs {
    float:left;
    text-align: center;
    width: 9vw;
    height: calc(23vw + 1px);
    background:
        linear-gradient(to bottom right, transparent, transparent 49%, black 51%, black 51%, transparent 51%, transparent);
    margin: 0 auto 0 -1vw;
    display: block;
    position: relative;
}
</style>