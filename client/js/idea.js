class Idea extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleStar() {
    this.props.idea.starred = !this.props.idea.starred;
    console.log(this.props.idea.starred)
    this.props.handleStar();
  }

  delete(idea) {
    if (idea.starred) {
      this.props.deleteStarIdea();
    } else {
      this.props.deleteIdea();
    }
  }

  render() {
    const {
      idea
    } = this.props;
    return (
      <div className='idea'>
        {idea.starred ?
          <div
            onClick={this.toggleStar.bind(this)}
            className='starClicked'>&#9734;
          </div> :
          <div
            onClick={this.toggleStar.bind(this)}
            className='star'>&#9734;
          </div>}
        <h4>Title: {idea.title}</h4>
        <p>Description: {idea.description}</p>
        <p>Created By: {idea.creator}</p>
        <p onClick={() => this.delete(idea) } className='delete'>delete</p>
      </div>
    )
  }
}

window.Idea = Idea;
