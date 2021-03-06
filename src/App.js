import React from 'react';
import classnames from 'classnames';
import Bird from './components/Bird';
import Piping from './components/Piping';
import Menu from './components/Menu';
import './css/leaderboard.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bird: this.props.state.bird,
      pipings: this.props.state.pipings,
      game: this.props.state.game,
      player: this.props.state.player,
      FLY_UP: this.props.actions.FLY_UP,
      START_PLAY: this.props.actions.START_PLAY,
    };
  }

  componentWillMount() {
    this.setState({
      isPlaying: this.state.game.status === 'playing',
      onFlyUp: this.state.isPlaying && this.state.FLY_UP,
      landClasses: classnames({ land: true, sliding: this.state.isPlaying }),
    });
  }

  render() {
    return (
      <div>
        <div className='wrapper'>
          <div className='wrapper__header'>
            <div className='b_logo'>
              <img
                src='https://images.vexels.com/media/users/3/135313/isolated/lists/9c44517fa04da541c35888362bce2d1b-award-trophy-icon.png'
                width='40'
                alt=''
              />
            </div>
            <div className='b_caption'>
              <p>
                Scores<span>leaderboard</span>
              </p>
            </div>
          </div>
          <div className='wrapper__content'>
            <ul>
              <li>
                {/* <div className='graphic'>
                <img
                  src='data:image/jpeg;base64,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'
                  alt=''
                />
              </div> */}
                <div className='name'>
                  <span className='header'>#1</span>
                  <span className='stat'>47</span>
                  <span className='sub'>point</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className='game'>
          <div className='scene' onMouseDown={this.state.onFlyUp} onTouchStart={this.state.onFlyUp}>
            {this.state.isPlaying && <div className='score'>{this.state.player.score}</div>}
            <Bird {...this.state.bird} isFlying={this.state.isPlaying} />
            {this.state.pipings.list.map((piping) => (
              <Piping key={piping.timestamp} {...piping} />
            ))}
            <div className={this.state.landClasses} />
            {this.state.game.status === 'over' && (
              <Menu
                score={this.state.player.score}
                onPlay={this.state.START_PLAY}
                // onReplay={onReplay}
                // onReverse={record.reverse}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
