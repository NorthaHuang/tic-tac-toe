import React, { Component } from 'react';

/* Styled-Components */
import { Circle, Cross } from './styled/symbol';
import { GridsBox, Grid } from './styled/grids';
import { InfoBox } from './styled/info_box';
import App from './styled/app';

class TicTacToe extends Component {
  state = {
    grids: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    nowPlayer: 1,
    winner: 0,
    ruleList: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ],
  }

  /* 重置 (初始化) */
  reset = () => {
    this.setState({
      grids: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      nowPlayer: 1,
      winner: 0,
    });
  }

  /* 符號轉換 */
  toSymbol = num => {
    switch (num) {
      case -1: return <Cross />;
      case 0: return null;
      case 1:
      default:
        return <Circle />;
    }
  }

  /* 點擊方格 */
  clickGrid = (idx) => {
    const { grids, nowPlayer, winner } = this.state;

    if (grids[idx] !== 0 || winner !== 0) return;

    grids[idx] = nowPlayer;

    this.setState({
      grids,
      nowPlayer: -nowPlayer,
    }, this.checkRule);
  }

  /* 檢查是否有人獲勝 */
  checkRule = () => {
    const { grids, ruleList } = this.state;

    ruleList.forEach(rule => {
      const total = rule.reduce((acc, idx) => acc + grids[idx], 0);
      if (total === 3) {
        this.setState({ winner: 1 });
        return false;
      }
      if (total === -3) {
        this.setState({ winner: -1 });
        return false;
      }
    });
  }

  render() {
    const { grids, nowPlayer, winner } = this.state;

    return (
      <App>
        <InfoBox>
          {
            winner !== 0
              ? <div>
                <h1>Winner:</h1>
                {this.toSymbol(winner)}
              </div>
              : <div>
                <p>Now Player:</p>
                {this.toSymbol(nowPlayer)}
              </div>
          }
        </InfoBox>

        <GridsBox>
          {
            grids.map((grid, idx) => (
              <Grid
                key={idx}
                style={{
                  pointerEvents: `${(grids[idx] === 0) ? 'auto' : 'none'}`,
                  cursor: `${(winner !== 0) ? 'not-allowed' : 'pointer'}`
                }}
                onClick={() => this.clickGrid(idx)}
              >{this.toSymbol(grid)}</Grid>
            ))
          }
        </GridsBox>
        <button onClick={this.reset}>Reset</button>
      </App >
    );
  }
}

export default TicTacToe;