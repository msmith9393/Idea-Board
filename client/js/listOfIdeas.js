class ListOfIdeas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      ideas,
      starredIdeas,
      handleStar,
      deleteIdea,
      deleteStarIdea
    } = this.props;
    return (
      <div id='container'>
        <div id='regular'>
          {ideas.length ? <h4 className='list-title'>IDEAS</h4> : null}
            {ideas.map((idea, index) =>
              <Idea
                handleStar={handleStar}
                key={index}
                idea={idea}
                deleteIdea={deleteIdea.bind(this, index)}
              />
            )}
          </div>
        <div id='stars'>
          {starredIdeas.length ? <h4 className='list-title'>&#9734; STARRED IDEAS</h4> : null}
            {starredIdeas.map((idea, index) =>
              <Idea
                deleteStarIdea={deleteStarIdea.bind(this, index)}
                handleStar={handleStar}
                key={index}
                idea={idea}
              />
            )}
        </div>
      </div>
    )
  }
}

window.ListOfIdeas = ListOfIdeas;