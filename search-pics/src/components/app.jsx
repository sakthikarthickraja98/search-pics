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
      <h3>
      <div className="fixed">
      <Searchbar onSubmit={this.onSearchSubmit}/>
      </div>
      </h3>

      <Imagelist Image={this.state.images}/>
      
    </div>
  );
  }
}

export default App;
