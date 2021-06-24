import React, {Component} from "react";
import "../searchbar.css";

class Searchbar extends Component{
    state =  { term :'' };

    onFormsubmit = (event) => {
        event.preventDefault()

        console.log(this.state.term);
    }

    render(){
        return(
        <div>
        <form onSubmit={this.onFormsubmit} >
         <div className="box ui category search">
             <div className="ui icon input" >
                 <input className="prompt" type="text" placeholder="Search Images..." value={this.state.term} onChange={(e) => this.setState({term : e.target.value})}/>
                 <i className="search icon"></i>
            </div>
         </div>
        </form>
        </div>
        );
    };
};

export default Searchbar;