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
        <h4>Title: {idea.title}</h4>
        <p>Description: {idea.description}</p>
        <p>Created By: {idea.creator}</p>
      </div>
    )
  }
}

window.Idea = Idea;
