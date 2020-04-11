import React from 'react'
import Paper from '@material-ui/core/Paper';
import PermanentDrawerLeft from '../../components/navbar/navbar'
import Grid from '@material-ui/core/Grid';



export default class My_reports extends React.Component {
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
               <h1>my reports</h1>

            </div>
        )
    }
}