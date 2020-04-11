import React from 'react'
import Paper from '@material-ui/core/Paper';
import PermanentDrawerLeft from '../../components/navbar/navbar'
import Grid from '@material-ui/core/Grid';



export default class Skills extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
               <PermanentDrawerLeft history={this.props.history}/>
               <h1>Skills</h1>

            </div>
        )
    }
}