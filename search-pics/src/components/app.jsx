import React,{Component} from "react";
import Searchbar from "./searchbar";
import unsplash from '../api/unsplash';
import Imagelist from './imagelist';
import "../searchbar.css";

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
      <div className="sticky">
      <h3>
      <div className="ui segment">
      <Searchbar onSubmit={this.onSearchSubmit}/>
      </div>
      </h3>
      </div>

      <Imagelist Image={this.state.images}/>
      
    </div>
  );
  }
}

export default App;
