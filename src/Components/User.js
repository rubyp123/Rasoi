// Using Functional component 

// const User = () => {
//     return (
//         <div>
//             <h1>Ruby Prajapati</h1>
//         </div>
//     )
// }

// export default User;


/// Class Components : 

import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count:0,
        };
    }
    

    render(){
        const  {name} = this.props;
        return (
            <div>
                <h2>count : {this.state.count}</h2>

                <button onClick={()=>{
                    this.setState({
                        count : this.state.count+1,
                    })
                }}>OK</button>
                
                <h1>{name}( Class component)</h1>
            </div>
        )
    }
} 

export default User;