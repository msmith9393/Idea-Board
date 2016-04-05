class InspirationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  back() {
    this.props.back();
  }

  render() {
    const {
      back
    } = this.props;
    return (
      <form className='insp-form'>
        <div className='back-to-ideas-btn' onClick={() => this.back()}>back to ideas</div>
        <label>Choose a Category: 
          <select
            value={category}>
            onChange{e => console.log(e.target.value)}
            <option></option>
            <option value={2}>Buildings</option>
            <option value={3}>Food & Drinks</option>
            <option value={4}>Nature</option>
            <option value={8}>Objects</option>
            <option value={6}>People</option>
            <option value={7}>Technology</option>
          </select>
        </label>
      </form>
    )
  }
}

window.InspirationForm = InspirationForm;

















