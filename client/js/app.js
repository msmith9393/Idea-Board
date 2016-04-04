class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAddForm: false,
      ideas: [],
      starredIdeas: []
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

  show() {
    this.setState({displayAddForm: true});
  }
  
  hide() {
    this.setState({displayAddForm: false});
  }

  addIdea(idea) {
    var newIdeas = this.state.ideas.concat([idea]);
    this.setState({ideas: newIdeas, displayAddForm: false})
  }

  render() {
    const {
      displayAddForm,
      ideas,
      starredIdeas
    } = this.state;
    return (
      <div>
        <h3>IDEA BOARD</h3>
        <button onClick={() => this.getUnsplashPhoto()}>Show Photo</button>
        <div className='new-button' onClick={() => this.show()}>new idea</div>
        {displayAddForm ? <NewIdeaForm exit={this.hide.bind(this)} addIdea={this.addIdea.bind(this)} /> : null}

        <ListOfIdeas ideas={ideas} />

      </div>
    )
  }
}

window.App = App;









