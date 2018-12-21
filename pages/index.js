import React, {Component} from 'react';
import Layout from '../components/Layout';
import Diaries from '../components/Diaries';
import { Container } from 'semantic-ui-react'
 
class CampaignIndex extends Component {
    

    render(){
        return ( 
        <Layout>
            <Diaries></Diaries>
        </Layout>
        )
    }
}

export default CampaignIndex;