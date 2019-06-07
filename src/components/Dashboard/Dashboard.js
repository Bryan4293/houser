import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import store from '../../store';
import House from '../House/House'
import { thisExpression } from '@babel/types';


class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state ={
            houses: store.getState().houses
        }
        this.getAll= this.getAll.bind(this)
    }

    componentDidMount(){
        this.getAll()
    }

    getAll(){
        axios.get('/api/houses', {houses: this.state.houses})
            .then(response =>{
                this.setState({houses: response.data})
            })
            .catch(error => console.log(`AXIOS GETALL ${error}`))
    }

    render(){
        return(
        <div>
           <Link to='/Wizard'>Add new Property</Link>
           <House houses = {this.state.houses} />
        </div>
        )
    }
}
export default Dashboard