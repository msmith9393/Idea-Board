class NewIdeaForm extends React.Component {
  constructor(props) {
    super(props);
  }

  addIdeaToForm() {
    console.log();
    var idea = {
      title: $('.title')[0].value,
      description: $('.description')[0].value,
      creator: $('.creator')[0].value
    }
    this.props.addIdea(idea);
  }

  render() {
    const {
      exit,
      addIdea
    } = this.props;
    return (
      <form className='form'>
        <div onClick={() => exit()} className='cancel'>X</div>
        <label>Title: <input className='title' type='text' placeholder='enter idea here' /></label>
        <label>Description: <input className='description' type='text' placeholder='enter description here' /></label>
        <label>Creator: <input className='creator' type='text' placeholder='enter creator here' /></label>
        <div onClick={this.addIdeaToForm.bind(this)} className='add-idea-button'>add idea</div>
      </form>
    )
  }
}

window.NewIdeaForm = NewIdeaForm;