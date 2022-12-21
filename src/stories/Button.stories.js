import React from 'react'
import Button from '../Components/Button'

const Template = args => <Button {...args} />

export const Red = Template.bind({})
Red.args = {
  backgroundColor: 'red',
  label: 'Click',
  size: 'lg',
}

export const Green = Template.bind({})
Green.args = {
  backgroundColor: 'green',
  label: 'Click',
  size: 'md',
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor: 'skyblue',
  label: 'Press Me',
  size: 'sm',
}

export default {
  title: 'Components/Button',
  component: Button,
}
