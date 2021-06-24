import React,{Component} from "react";
import Searchbar from "./searchbar";
import unsplash from '../api/unsplash';

class App extends Component{
  state={images:[]};

onSearchSubmit = async(term) => {
  const response = await unsplash.get('search/photos',{
   params:{query:term},
  });
  this.setState({images:response.data.results});
}

  render(){
    return (
    <div>
      <Searchbar onSubmit={this.onSearchSubmit}/>
      Found: {this.state.images.length} images
    </div>
  );
  }
}

export default App;
