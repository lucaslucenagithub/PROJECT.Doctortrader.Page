import React from 'react'
import { Box, Image, Dot } from 'rebass'
import propTypes from 'prop-types'

const IqDevices = ({
  style = {},
  color = '',
  src = '',
  children,
  ...props
}) => <Box bg={color}
  style={{
    borderRadius: 0,
    overflow: '',
    boxShadow: '',
    ...style
  }}
  {...props}>
  <Box pl={1} style={{
    background: '',
    borderBottom: ''
  }}>
    {/* <Dot />
    <Dot />
    <Dot /> */}
  </Box>
  {src ? <Image src={src} /> : children}
</Box>

IqDevices.displayName = 'IqDevices'
IqDevices.propTypes = {
  src: propTypes.string,
  style: propTypes.object,
  color: propTypes.string,
  children: propTypes.any
}
export default IqDevices
