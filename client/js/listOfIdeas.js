class ListOfIdeas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      ideas,
      starredIdeas,
      handleStar
    } = this.props;
    return (
      <div id='container'>
      {starredIdeas.length ? <h4>Starred</h4> : null}
        {starredIdeas.map((idea, index) =>
          <Idea
            handleStar={handleStar}
            key={index}
            idea={idea}
          />
        )}
      {starredIdeas.length && ideas.length ? <hr /> : null}
      {ideas.length ? <h4>Not Starred</h4> : null}
        {ideas.map((idea, index) =>
          <Idea
            handleStar={handleStar}
            key={index}
            idea={idea}
          />
        )}
      </div>
    )
  }
}

window.ListOfIdeas = ListOfIdeas;