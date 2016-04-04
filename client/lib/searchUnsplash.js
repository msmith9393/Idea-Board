var searchUnsplash = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://api.unsplash.com/categories/' +  options.category_id + '/photos?client_id=' + UNSPLASH_APPLICATION_ID,
    success: function(photos) {

      console.log('Success in searchUnsplash!');
      callback(photos);
    },
    error: function(data) {
      console.log('Ajax error in searchUnsplash');
    }
  });
};

window.searchUnsplash = searchUnsplash;