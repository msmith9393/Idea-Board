class IdeaVisualizeDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.showVisualization();
  }

  render() {
    const {
      showVisualization
    } = this.props;
    return (
      <div>
        <button onClick={() => this.handleClick()}>Show Bubble Ideas</button>
        <div id='graph'></div>
      </div>
    )
  }
}

window.IdeaVisualizeDisplay = IdeaVisualizeDisplay;
