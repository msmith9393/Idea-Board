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

  handleStar() {
    console.log('handleStar');
    var allIdeas = this.state.ideas.concat(this.state.starredIdeas);
    var newIdeas = [];
    var newStarredIdeas = [];
    allIdeas.forEach(function(idea) {
      if (idea.starred) {
        newStarredIdeas.push(idea);
      } else {
        newIdeas.push(idea);
      }
    });
    this.setState({ideas: newIdeas, starredIdeas: newStarredIdeas})
  }

  render() {
    const {
      displayAddForm,
      ideas,
      starredIdeas,
    } = this.state;
    return (
      <div>
        <h3>IDEA BOARD</h3>
        <hr />
        <button onClick={() => this.getUnsplashPhoto()}>Show Photo</button>
        <div className='new-button' onClick={() => this.show()}>new idea</div>
        {displayAddForm ? <NewIdeaForm exit={this.hide.bind(this)} addIdea={this.addIdea.bind(this)} /> : null}

        <ListOfIdeas handleStar={this.handleStar.bind(this)} ideas={ideas} starredIdeas={starredIdeas} />

      </div>
    )
  }
}

window.App = App;









