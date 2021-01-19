import React, { Component} from "react";
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuider extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {...}
    // }
    // state = {
    //     ingredients: 
    // }
    render(){
        return(
            <Aux>
                <Burger />
                <div>Build Controls</div>
            </Aux>
        );
    }
}


export default BurgerBuider