import React from 'react';

class Cassette extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lt: 7.6,
      rt: 0,
      playing: false,
      canPlay: false,
      audio: '',
    }
  }

  componentDidMount() {
    let playerElement = this.refs.player;
    this.setState({ audio: playerElement });
    if (this.props.preload === 'none') {
      this.audioReady();
    } else {
      playerElement.addEventListener('canplay', this.audioReady);
    }
    playerElement.addEventListener('ended', this.audioEnded);
    playerElement.addEventListener('timeupdate', this.audioUpdate);
    playerElement.addEventListener('pause', this.audioPause);
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.src !== nextProps.src) {
      this.audioPause();
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.src !== this.props.src) {
      this.audioLoad();
      this.audioPlay();
    }
  };

  audioReady = () => {
    this.setState({
      canPlay: true
    });
  };

  audioPlay = () => {
    try {
      let audioElements = document.getElementsByTagName('audio');
      for (let i = 0; i < audioElements.length; i++) {
        audioElements[i].pause();
      }
    } catch (e) { }
    this.state.audio.play();
    this.setState({
      playing: true
    });
  };

  audioPause = () => {
    this.state.audio.pause();
    this.setState({
      playing: false
    });
  };

  audioLoad = () => {
    this.state.audio.load();
    this.setState({
      lt: 7.6,
      rt: 0,
      playing: false,
      canPlay: false
    });
  };

  audioUpdate = () => {
    let playerElement = this.state.audio;
    let rt = playerElement.currentTime / playerElement.duration;
    let tapeLeft = 7.6 * (1 - rt);
    let tapeRight = 7.6 - tapeLeft;
    if (tapeLeft < 0.07) {
      tapeLeft = 0.07;
    }
    this.setState({
      lt: tapeLeft,
      rt: tapeRight
    });
  };

  audioEnded = () => {
    this.setState({
      playing: false
    });
  };

  togglePlayPause = () => {
    if (this.state.playing) {
      this.audioPause();
    } else {
      this.audioPlay();
    }
  };


  render() {
    /* let scaleMethod = "xMidYMid " + this.props.scaleMethod; */
    let ls = "M40.849,49.944 h" + this.state.lt + " c0.243-1.207,0.367-2.438,0.367-3.669 c0-1.339-0.146-2.676-0.435-3.984 h-" + (this.state.lt - 0.06) + " V49.944 z";
    let rightSpool;
    let playControls;
    if (this.state.rt >= 0.07) {
      let rs = "M40.849,49.944 h" + this.state.rt + " c0.243-1.207,0.367-2.438,0.367-3.669 c0-1.339-0.146-2.676-0.435-3.984 h-" + (this.state.rt - 0.06) + " V49.944 z";
      rightSpool = <path fill={"blue"} d={rs} transform={'translate(100, 0) scale(-1, 1)'} />
    } else {
      rightSpool = '';
    }
    if (this.state.playing) {
      playControls = <g transform={'scale(0.14) translate(285,465)'} >
        <rect fill={"purple"} x={'50.927'} y={'28.349'} width={'10.715'} height={'42.863'} />
        <rect fill={"purple"} x={'72.359'} y={'28.349'} width={'10.718'} height={'42.863'} />
      </g>
    } else if (!this.state.canPlay) {
      playControls = null;
    } else {
      playControls = <g transform={'scale(0.14) translate(325,465)'} >
        <path fill={"purple"} d={'M16.785,27.729c-1.745-0.816-3.862-1.089-3.862,1.617v40.985c0,2.498,1.909,2.844,3.874,1.685l27.77-19.994   c2.093-1.537,1.419-3.089-0.179-4.405L16.785,27.729z'} />
      </g>
    }

    return <div className={this.props.containerClass}>
      <audio ref={'player'} preload={this.props.preload} >
        <source src={this.props.audio} type={this.props.mimeType} />
      </audio>
      <div>
        <svg onClick={this.togglePlayPause} x={'0px'} y={'0px'} width={'100vw'} height={'100vh'} viewBox={'0 0 100 100'}>
          <g>
            <polygon fill={"yellow"} points={'23.034,66.621 20.613,78.02 79.387,78.02 76.965,66.621'}>
            </polygon>
            {playControls}
            <path fill={"red"} d={'M86.225,25.851h-72.45c-1.667,0-3.024,1.356-3.024,3.023v29.189c0,1.666,1.356,3.023,3.024,3.023h72.45    c1.668,0,3.023-1.357,3.023-3.023V28.874C89.248,27.207,87.893,25.851,86.225,25.851z M30.769,52.279    c-3.205,0-5.803-2.597-5.803-5.802s2.598-5.803,5.803-5.803c3.205,0,5.803,2.598,5.803,5.803S33.973,52.279,30.769,52.279z     M60.234,51.023H39.77V41.21h20.465V51.023z M69.235,52.279c-3.205,0-5.803-2.597-5.803-5.802s2.598-5.803,5.803-5.803    s5.803,2.598,5.803,5.803S72.44,52.279,69.235,52.279z'} />
            <path fill={"green"} d={'M91.399,21.98H8.6c-1.988,0-3.6,1.612-3.6,3.6v48.84c0,1.988,1.612,3.6,3.6,3.6h9.805l2.88-13.561h57.43    l2.88,13.561h9.805c1.988,0,3.601-1.611,3.601-3.6V25.58C95,23.592,93.388,21.98,91.399,21.98z M90.328,58.062    c0,2.262-1.841,4.102-4.104,4.102h-72.45c-2.263,0-4.104-1.84-4.104-4.102V28.874c0-2.262,1.841-4.103,4.104-4.103h72.45    c2.263,0,4.104,1.841,4.104,4.103V58.062z'} />
          </g>
          <g>
            <path fill={"blue"} d={ls} />
            {rightSpool}
          </g>
        </svg>
      </div>
    </div >
  }
};

export default Cassette;