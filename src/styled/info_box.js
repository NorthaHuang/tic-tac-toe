import styled from 'styled-components';
import variables from './variables';

/*----- Variables -----*/
const { SIZE } = variables;
const GAP = 30;

/*----- CSS -----*/
const InfoBox = styled.div`
  width: ${SIZE * 3}px;
  margin: auto;
  padding: 10px 0;
  margin-bottom: ${GAP}px;
  border: 2px solid #333;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 30px;
    font-weight: bold;
  }

  p, h1 {
    margin-right: 15px;
  }
`;

export { InfoBox };