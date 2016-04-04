class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
      // images: imageData,
      // currentImageIndex: 0
    // };
  }

  getUnsplashPhoto() {
    var options = {
      category_id: 7,
    };
    searchUnsplash(options, (photos) => {
      var num = photos.length - 1;
      var randNum = Math.floor(Math.random() * num);
      var randPhoto = photos[randNum].urls.regular;
      console.log(randPhoto)
      console.log('DATA IN getUnsplashPhoto', photos);
    })
  }
  
  render() {
    // const {
    //   images,
    //   currentImageIndex
    // } = this.state;
    return (
      <div>
        <h3>IDEA BOARD</h3>
        <button onClick={() => this.getUnsplashPhoto()}>Show Photo</button>
      </div>
    )
  }
}

window.App = App;