import React from 'react'
import { Card, Icon, Image, Grid} from 'semantic-ui-react'


const CardExampleImageCard = () => (
    <Grid container columns={3} style={{padding:'15px'}}>
        <Grid.Column>
            <Card>
            <Image src='/static/kiteCopy.png' />
            <Card.Content>
                <Card.Header>Caribbean kite Cruise</Card.Header>
                <Card.Meta>Nov 24, 2018</Card.Meta>
                <Card.Description>Sailing around the carribean</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                <Icon name='user' />
                2 Friends
                </a>
            </Card.Content>
            </Card>
        </Grid.Column>
    </Grid>
)

export default CardExampleImageCard
