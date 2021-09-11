export default {
  title: 'components/ImageButton',
}

const Template = (args:any) => ({
  setup() {
    return { args }
  },
  template: '<image-button :imageUrl="args.imageUrl" :imageWidth="args.imageWitdth" :imageHeight="args.imageHeight" />'
})
export const Light = Template.bind({})
// @ts-ignore
Light.args = {
  imageUrl:'/lightOff.png',
  imageWitdh: '32vw',
  imageHeight: '32vw'
}

// @ts-ignore
Light.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/MymqdKv8LbRnIeYYQtyIYA/ghome2?node-id=3%3A3'
  }
}
export const Aircon = Template.bind({})
// @ts-ignore
Aircon.args = {
  imageUrl:'/aircon.png',
  imageWitdh: '32vw',
  imageHeight: '32vw'
}

// @ts-ignore
Aircon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/MymqdKv8LbRnIeYYQtyIYA/ghome2?node-id=3%3A3'
  }
}
export const Key = Template.bind({})
// @ts-ignore
Key.args = {
  imageUrl:'/key.png',
  imageWitdh: '32vw',
  imageHeight: '32vw'
}

// @ts-ignore
Key.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/MymqdKv8LbRnIeYYQtyIYA/ghome2?node-id=3%3A3'
  }
}