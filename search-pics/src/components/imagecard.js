import React from "react";

class Imagecard extends React.Component{
    
    constructor (props){
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
       this.imageRef.current.addEventListener('load',this.setSpan);
    }

    setSpan = () =>{
        console.log(this.imageRef.current.clientHeight);
    }

    render(){

        const {description, urls} = this.props.image;
        return(
          <div>
              <img ref={this.imageRef} alt={description} src={urls.regular} />
          </div>
        );
    }
}

export default Imagecard;