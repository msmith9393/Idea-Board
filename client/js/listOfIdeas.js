class ListOfIdeas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      ideas
    } = this.props;
    return (
      <div id='container'>
        {ideas.map((idea, index) =>
          <Idea
            key={index}
            idea={idea}
          />
        )}
      </div>
    )
  }
}

window.ListOfIdeas = ListOfIdeas;