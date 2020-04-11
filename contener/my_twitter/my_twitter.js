import React from 'react'
import Paper from '@material-ui/core/Paper';
import PermanentDrawerLeft from '../../components/navbar/navbar'
import Grid from '@material-ui/core/Grid';
import Iframe from 'react-iframe'




export default class My_twitter extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
               <PermanentDrawerLeft history={this.props.history}
               title="Twitter"
               content={<div>
                 <iframe width="853" height="480" src="https://www.youtube.com/embed/tkCN0EOPeeY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </div>}
               />
               {/* <h1>My twitter</h1> */}

            </div>
        )
    }
}