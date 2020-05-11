import styled from 'styled-components';
import variables from './variables';

/*----- Variables -----*/
const { SIZE } = variables;
const BORDER_WIDTH = 2;
const BORDER_COLOR = '#999';

/*----- Mixins -----*/
const common = `
  overflow: hidden;
  border: ${BORDER_WIDTH}px solid ${BORDER_COLOR};
`;

/*----- CSS -----*/
/* 大外框 */
const GridsBox = styled.div`
  ${common}
  width: ${SIZE * 3}px;
  height: ${SIZE * 3}px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

/* 內部小框 */
const Grid = styled.div`
  ${common}
  width: ${SIZE}px;
  height: ${SIZE}px;
  cursor: pointer;
  border-top-width: 0;
  border-left-width: 0;
  transition: 100ms;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #eee;
  }

  &:nth-of-type(3n) {
    border-right-width: 0;
  }

  &:nth-last-of-type(1),
  &:nth-last-of-type(2),
  &:nth-last-of-type(3) {
    border-bottom-width: 0;
  }
`;

export { GridsBox, Grid };