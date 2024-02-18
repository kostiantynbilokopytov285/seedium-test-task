import styled from 'styled-components'

interface IFlexProps {
  $alignItems?: 'center' | 'flex-start' | 'flex-end'
  $background?: string
  $backgroundColor?: string
  $backgroundImage?: string
  $bottom?: string
  $borderRadius?: string
  $border?: string
  $boxShadow?: string
  $display?: 'flex' | 'none'
  $flex?: string
  $cursor?: 'pointer' | 'default'
  $justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-evenly'
    | 'space-around'
    | ''
  $flexDirection?: 'column' | 'row' | 'row-reverse'
  $flexWrap?: 'wrap' | 'nowrap'
  $height?: string
  $gap?: string
  $left?: string
  $margin?: string
  $marginRight?: string
  $marginBottom?: string
  $minHeight?: string
  $minWidth?: string
  $maxHeight?: string
  $maxWidth?: string
  $overflow?: 'hidden' | 'visible' | 'auto'
  $padding?: string
  $position?: 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static'
  $right?: string
  $textColor?: string
  $top?: string
  $visibilityProp?: 'hidden' | 'visible'
  $width?: string
  $zIndex?: string
}

const Flex = styled.div<IFlexProps>`
  flex: ${(props) => props.$flex};
  position: ${(props) => props.$position};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  min-height: ${(props) => props.$minHeight};
  min-width: ${(props) => props.$minWidth};
  max-height: ${(props) => props.$maxHeight};
  max-width: ${(props) => props.$maxWidth};
  padding: ${(props) => props.$padding};
  margin-right: ${(props) => props.$marginRight};
  margin-bottom: ${(props) => props.$marginBottom};
  margin: ${(props) => props.$margin};
  flex-wrap: ${(props) => props.$flexWrap};
  flex-direction: ${(props) => props.$flexDirection};
  background-color: ${(props) => props.$backgroundColor};
  background-image: ${(props) =>
    props.$backgroundImage && `url(${props.$backgroundImage})`};
  background: ${(props) => props.$background};
  color: ${(props) => props.$textColor};
  top: ${(props) => props.$top};
  right: ${(props) => props.$right};
  bottom: ${(props) => props.$bottom};
  left: ${(props) => props.$left};
  z-index: ${(props) => props.$zIndex};
  overflow: ${(props) => props.$overflow};
  border-radius: ${(props) => props.$borderRadius};
  border: ${(props) => props.$border};
  box-shadow: ${(props) => props.$boxShadow};
  visibility: ${(props) => props.$visibilityProp};
  display: ${(props) => props.$display || 'flex'};
  gap: ${(props) => props.$gap};
  cursor: ${(props) => props.$cursor};
`

export default Flex
