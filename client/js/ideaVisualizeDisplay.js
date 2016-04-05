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
    var starredIdeas = this.props.starredIdeas
    var ideas = this.props.ideas

    var allIdeas = ideas.concat(starredIdeas).map(function(obj, index) {
      obj.index = index+1;
      return obj;
    });


    if (allIdeas.length) {
      d3it(allIdeas);
    }
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
