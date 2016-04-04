class NewIdeaForm extends React.Component {
  constructor(props) {
    super(props);
  }
  exit() {
    console.log(this.props);
    // this.setState({});
  }
  render() {
    return (
      <form className='form'>
        <div onClick={() => this.exit()} className='cancel'>X</div>
        <label>Title: <input type='text' placeholder='enter idea here' /></label>
        <label>Description: <input type='text' placeholder='enter description here' /></label>
        <label>Creator: <input type='text' placeholder='enter creator here' /></label>
        <div className='add-idea-button'>add idea</div>
      </form>
    )
  }
}

window.NewIdeaForm = NewIdeaForm;