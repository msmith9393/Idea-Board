class IdeaVisualizeDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.showVisualization();
  }

  back() {
    this.props.back();
  }

  showIdeas() {
    d3it();
  }

  render() {
    const {
      showVisualization
    } = this.props;
    return (
      <div>
        <div className='back-to-ideas-btn' onClick={() => this.back()}>back to ideas</div>
        <div className='back-to-ideas-btn' onClick={() => this.showIdeas()}>show ideas</div>
        <div id='graph'></div>
      </div>
    )
  }
}

window.IdeaVisualizeDisplay = IdeaVisualizeDisplay;
