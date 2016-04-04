class Idea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      idea,
      key
    } = this.props;
    return (
      <div className='idea'>
        <div className='star'>&#9734;</div>
        <h4>Title: {idea.title}</h4>
        <p>Description: {idea.description}</p>
        <p>Created By: {idea.creator}</p>
      </div>
    )
  }
}

window.Idea = Idea;
