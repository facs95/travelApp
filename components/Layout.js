import React, {Component} from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import LateralMenu from './lateralMenu';
export default props => {

    return (
        <Container fluid>
            <Head>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"></link>
            </Head>
            <div>
                <Header />
                {props.children}
            </div>
        </Container>
    )
  
}