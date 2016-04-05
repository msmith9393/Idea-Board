class InspirationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  back() {
    this.props.back();
  }

  changeValue(e) {
    var categoryId = e.target.value;
    this.props.getUnsplashPhoto(categoryId);
  }

  render() {
    const {
      back,
      inspiringPhoto
    } = this.props;
    return (
      <div>
        <form className='insp-form'>
          <div className='back-to-ideas-btn' onClick={() => this.back()}>back to ideas</div>
          <label>Choose a Category: 
            <select onChange={e => this.changeValue(e)}>
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
        {!inspiringPhoto ? null : <div id='image'><img className="image-display" src={inspiringPhoto} /></div>}
      </div>
    )
  }
}

window.InspirationForm = InspirationForm;

















