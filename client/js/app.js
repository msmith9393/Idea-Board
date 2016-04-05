class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAddForm: false,
      displayInspirationForm: false,
      showVisualization: false,
      ideas: [],
      starredIdeas: [],
      inspiringPhoto: null
    };
  }

  getUnsplashPhoto(catId) {
    var options = {
      category_id: catId,
    };
    searchUnsplash(options, (photos) => {
      var num = photos.length - 1;
      var randNum = Math.floor(Math.random() * num);
      var randPhoto = photos[randNum].urls.regular;
      console.log('CATID', catId)
      console.log('RAND PHOTO', randPhoto)
      this.setState({inspiringPhoto: randPhoto})
    })
  };

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

  getInspiration() {
    this.hide();
    this.setState({displayInspirationForm: true})
  }

  getVisualization() {
    this.setState({displayAddForm: false, displayInspirationForm: false, showVisualization: true})
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

  goBack() {
    this.setState({displayInspirationForm: false, showVisualization: false})
  }

  deleteIdea(index) {
    console.log(index);
    var oldIdeas = this.state.ideas;
    oldIdeas.splice(index, 1);
    this.setState({ideas: oldIdeas});
  }

  deleteStarIdea(index) {
    console.log(index);
    var oldIdeas = this.state.starredIdeas
    oldIdeas.splice(index, 1);
    this.setState({starredIdeas: oldIdeas});
  }

  render() {
    const {
      displayAddForm,
      displayInspirationForm,
      ideas,
      starredIdeas,
      showVisualization,
      inspiringPhoto
    } = this.state;
    return (
      <div className='header'>
        <h3>IDEA BOARD</h3>
        <img className='divider' src='assets/squiggly.png' />
        {displayInspirationForm ? null :
          <div className='btns'>
            <div className='inspiration-btn' onClick={() => this.getInspiration()}>inspiration?</div>
            <div className='new-button' onClick={() => this.show()}>new idea</div>
            <div className='bubble-button' onClick={() => this.getVisualization()}>visualize</div>
          </div>
        }
        {showVisualization ? <IdeaVisualizeDisplay ideas={ideas} starredIdeas={starredIdeas} back={this.goBack.bind(this)} /> : null }
        {displayAddForm ? <NewIdeaForm exit={this.hide.bind(this)} addIdea={this.addIdea.bind(this)} /> : null}
        {displayInspirationForm ?
          <InspirationForm
            inspiringPhoto={inspiringPhoto}
            getUnsplashPhoto={this.getUnsplashPhoto.bind(this)}
            back={this.goBack.bind(this)} /> :
          <ListOfIdeas
            deleteIdea={this.deleteIdea.bind(this)}
            deleteStarIdea={this.deleteStarIdea.bind(this)}
            handleStar={this.handleStar.bind(this)}
            ideas={ideas}
            starredIdeas={starredIdeas} />
        }
      </div>
    )
  }
}

window.App = App;









