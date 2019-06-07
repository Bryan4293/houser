import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import store, {UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE,UPDATE_ZIP_CODE} from '../../store'
import axios from "axios";



class Wizard extends Component{
    constructor(props){
        super(props);
        this.state ={
            name: store.getState().name,
            address: store.getState().address,
            city: store.getState().city,
            state: store.getState().state,
            zip_code: store.getState().zip_code
        }
        this.addPost = this.addPost.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    addPost() {
        let { name, address, city, state, zip_code } = this.state
        axios
          .post("/api/house", {
            name: name,
            address: address,
            city: city,
            state: state,
            zip_code: zip_code
          })
          .then(response => {
              console.log(response)
            this.setState({
              name: response.data.name,
              address: response.data.address,
              city: response.data.city,
              state: response.data.state,
              zip_code: response.data.zip_code
            });
         })
            .catch(error => console.log(`AXIOS ADDPOST ${error}`));
      }
    
      handleCancel() {
        this.setState({ 
            name: "",
            address: "",
            city: "",
            state: "",
            zip_code: 0 });
      }
    
      componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
          this.props.getHouses(this.props);
        }
      }
    
      handleChange(e) {
        this.setState({ [ e.target.name ]: e.target.value })
    }
    
    saveChanges() {
        let { name, address, city, state, zip_code } = this.state
        store.dispatch({
          type: UPDATE_NAME,
          payload: name
        })
        store.dispatch({
          type: UPDATE_ADDRESS,
          payload: address
        })
        store.dispatch({
          type: UPDATE_CITY,
          payload: city
        })
        store.dispatch({
          type: UPDATE_STATE,
          payload: state
        })
        store.dispatch({
            type: UPDATE_ZIP_CODE,
            payload: zip_code
          })
    
      }


    render(){
        let { name, address, city, state, zip_code } = this.state
        return(
            <div>
                <h3>Property Name</h3>
                <input type="text" name='name' onChange={this.handleChange} ></input>
                <h3>Address</h3>
                <input type="text" name='address' onChange={this.handleChange} ></input>
                <h3>City</h3>
                <input type="text" name='city' onChange={this.handleChange} ></input>
                <h3>State</h3>
                <input type="text" name='state' onChange={this.handleChange} ></input>
                <h3>Zip Code</h3>
                <input type="text" name='zip_code' onChange={this.handleChange} ></input>
               <Link to='/'><button>Cancel</button></Link>
                
            </div>
        )
    }

}
export default Wizard