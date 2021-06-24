import React,{Component} from "react";
import Searchbar from "./searchbar";
import axios from 'axios';

class App extends Component{
onSearchSubmit(term){
  axios.get('https://api.unsplash.com/search/photos',{
   params:{query:term},
   headers:{
     Authorization:'Client-ID X4aVEEcQOdQFc-tuhPQufHJ8m43k7IX9XwzdFymUnco'
   }
  });
}

  render(){
    return (
    <div>
      <Searchbar onSubmit={this.onSearchSubmit}/>
    </div>
  );
  }
}

export default App;
