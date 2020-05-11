import styled from 'styled-components';

/*----- Variables -----*/
const SIZE = 60;
const BORDER_WIDTH = 4;
const CROSS_OFFSET = 25;

/*----- Mixins -----*/
const common = `
  width: ${SIZE}px;
  height: ${SIZE}px;
  overflow: hidden;
  box-sizing: border-box;
`;

/*----- CSS -----*/
/* O 符號 */
const Circle = styled.div`
  ${common}
  border: ${BORDER_WIDTH}px solid blue;
  border-radius: 50%;
`;

/* X 符號 */
const Cross = styled.div`
  ${common}
  position: relative;

  &:before,
  &:after {
    content: '';
    width: ${100 + CROSS_OFFSET}%;
    height: ${BORDER_WIDTH}px;
    margin: auto;
    border-radius: 100px;
    display: block;
    background-color: red;
    position: absolute;
    top: 0; bottom: 0;
    left: -${CROSS_OFFSET / 2}%;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export { Circle, Cross };