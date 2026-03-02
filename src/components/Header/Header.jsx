import { Component } from "react";
import Linkk from "../Linkk/Linkk";

// import image from "../../assets/Picsart_24-09-20_20-01-23-412.jpg"
import { FaHome } from "react-icons/fa";


export default class Heaader extends Component{

        constructor(){
            super();
            this.state = {
                    name: "mona",
                    age: 30,
                };
        }

        componentDidMount(){
                    console.log("from mounting");

        }

        componentDidUpdate() {
                console.log(" from updating");
            }

            changeName=()=>{
                this.setState({name : this.state.name =="mona"? "moataz": "mona"})
            }

            render(){
                return (<>
                <h1 className="head">Front End</h1>
                        <FaHome />


                                 {/* 
                    <button onClick={this.changeName}>change name</button>
                    <h1> hello {this.state.name}</h1> */}


                    {/* <img src={image} alt="imm" /> */}
                    <Linkk name={["home", "login", "about"]} url={["home", "login", "about"]}/>



                </>)
            }


}




