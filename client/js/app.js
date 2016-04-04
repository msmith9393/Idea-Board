class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAddForm: false
      // currentImageIndex: 0
    };
  }

  // getUnsplashPhoto() {
  //   var options = {
  //     category_id: 7,
  //   };
  //   searchUnsplash(options, (photos) => {
  //     var num = photos.length - 1;
  //     var randNum = Math.floor(Math.random() * num);
  //     var randPhoto = photos[randNum].urls.regular;
  //     console.log(randPhoto)
  //     console.log('DATA IN getUnsplashPhoto', photos);
  //   })
  // };

  newIdea() {
    this.setState({displayAddForm: true});
    // var myElement = <NewIdeaForm />
    // ReactDOM.render(myElement, document.getElementById('new-form'))
  }
  
  exit() {
    this.setState({displayAddForm: false});
  }

  render() {
    return (
      <div>
        <h3>IDEA BOARD</h3>
        <button onClick={() => this.getUnsplashPhoto()}>Show Photo</button>
        <div className='new-button' onClick={() => this.newIdea()}>new idea</div>
        { this.state.displayAddForm ? <NewIdeaForm exit={this.exit.bind(this)} /> : null}
      </div>
    )
  }
}

window.App = App;









