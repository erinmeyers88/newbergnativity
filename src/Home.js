import React from 'react';
import Nativity from './Nativity.JPG';
import ChristmasStory from './ChristmasStory';
import {Button, Header, Image, Segment, Grid} from 'semantic-ui-react';

const Home = ({mobile}) => <div style={{height: '100%'}}>
  <div style={{
    backgroundImage: "url('" + Nativity + "')",
    backgroundSize: mobile ? "cover" : "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    height: mobile ? "50%" : 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <Header
      textAlign="center"
      as='h1'
      content='Newberg Nativity'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: 0
      }}
    />
    <Header
      textAlign="center"
      as='h2'
      content='wishes you a Merry Christmas!'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </div>
  <ChristmasStory/>
  <Segment style={{ padding: '8em 0em' }} vertical>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            We Help Companies and Companions
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            We can give your company superpowers to do things that they never thought possible.
            Let us delight your customers and empower your needs... through pure data analytics.
          </p>
          <Header as='h3' style={{ fontSize: '2em' }}>
            We Make Bananas That Can Dance
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Yes that's right, you thought it was the stuff of dreams, but even bananas can be
            bioengineered.
          </p>
        </Grid.Column>
        <Grid.Column floated='right' width={6}>
          <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign='center'>
          <Button size='huge'>Check Them Out</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  <Segment style={{ padding: '0em' }} vertical>
    <Grid celled='internally' columns='equal' stackable>
      <Grid.Row textAlign='center'>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            "What a Company"
          </Header>
          <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            "I shouldn't have gone with their competitor."
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            <Image avatar src='/images/avatar/large/nan.jpg' />
            <b>Nan</b> Chief Fun Officer Acme Toys
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>

</div>;


export default Home;
