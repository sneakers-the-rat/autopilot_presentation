// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Fill,
  Fit,
  Image,
  Layout,
  List,
  ListItem,
  Notes,
  Quote,
  S,
  Slide,
  Text
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

import preloader from "spectacle/lib/utils/preloader";

// expliticly import Prism
//import Prism from "prismjs";
//import 'prismjs/components/prism-python'
//import 'prismjs/themes/prism.css'

//window.Prism = Prism;

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
  overview_1: require('../assets/1_overview_1.svg'),
  overview_2: require('../assets/1_overview_2.svg'),
  overview_3: require('../assets/1_overview_3.svg'),
  others: require('../assets/2_others.svg'),
  concurrency_1: require('../assets/concurrency_1.svg'),
  concurrency_2: require('../assets/concurrency_2.svg'),
  concurrency_3: require('../assets/concurrency_3.svg'),
  lags: require('../assets/lags.svg')

};

// Require CSS
require('normalize.css');

const theme = createTheme(
{
  primary: "#20201d",
  secondary: "#f5f5f5",
  tertiary: "#ff3030",
  quaternary: "#b0b0b0"
},
{
  primary: 'Staatliches',
  secondary: 'Anonymous Pro'
}
);




export default class Presentation extends React.Component {
  render() {
    return (
            <Deck
            transition={['fade']}
            transitionDuration={200}
            theme={theme}
            progress="bar"
            contentWidth={1250}
            >
            <Slide bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="secondary">
            RPilot
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" textFont="secondary">
            Distributed Behavioral Experiments
            </Text>
            </Slide>

            <Slide bgColor="tertiary" align="center center">
            <Layout>
            <Fill><Heading textColor="primary" textAlign="center">Problems</Heading>
              <List textFont="secondary" textColor="primary" textSize={10}>
              <ListItem textSize={30}>Neuroscience needs behavior</ListItem>

              <ListItem textSize={30}>Behavior needs code and hardware</ListItem>
              </List>
              <Text textFont="secondary" textColor="secondary" textSize={30} textAlign="left">
              But existing systems are...
              </Text>
              <List textFont="secondary" textColor="primary" textSize={10}>
              <ListItem textSize={30}>limited</ListItem>
              <ListItem textSize={30}>expensive</ListItem>
              </List>
            </Fill>
            <Fit><Appear><Heading textColor="secondary"> > </Heading></Appear></Fit>
            <Appear><div>
            <Fill><Heading textColor="primary" textAlign="center">Choices</Heading>
                          <List textFont="secondary" textColor="primary" textSize={10}>
            <ListItem textSize={30}>Accept limitations</ListItem>
            <ListItem textSize={30}>Use <span style={{color:"#f5f5f5"}}>unreproducible</span> in-house code</ListItem>
            <ListItem textSize={30}>Do <span style={{color:"#f5f5f5"}}>underpowered</span> experiments</ListItem>
            <ListItem textSize={30}>(Be the <span style={{color:"#f5f5f5"}}>scientific plutocracy</span>)</ListItem>
            </List>
            </Fill>
            </div></Appear>

            </Layout>
            </Slide>


            <Slide bgColor="primary" transition={['none']}>
            <Heading textColor="secondary" size={1} textAlign="left">Introducing RPilot</Heading>
            <Heading textColor="tertiary" size={5} textAlign="left">A Python framework for behavioral neuroscience</Heading>
            <Image src={images.overview_3} width={800} height={575}/>
            </Slide>


            <Slide>
            <Heading size={1} textColor="secondary" caps textAlign="center">Design Priorities</Heading>

            <List textColor="tertiary">
            <ListItem textSize={60}>Efficiency - <span style={{'color':'#f5f5f5'}}>RPilot is fast</span></ListItem>
            <ListItem textSize={60}>Flexibility - <span style={{'color':'#f5f5f5'}}>RPilot can do anything</span></ListItem>
            <ListItem textSize={60}>Reproducibility - <span style={{'color':'#f5f5f5'}}>RPilot makes good science easy</span></ListItem>
            </List>

            </Slide>

            <Slide>
            <Heading size={3} textColor="tertiary" caps textAlign="left">Efficiency - <span style={{'color':'#f5f5f5'}}>Concurrency</span></Heading>

            <Image src={images.concurrency_1} width="100%"/>

            </Slide>

            <Slide>
            <Heading size={3} textColor="tertiary" caps textAlign="left">Efficiency - <span style={{'color':'#f5f5f5'}}>Concurrency</span></Heading>

            <Image src={images.concurrency_2} width="100%"/>

            </Slide>

            <Slide>
            <Heading size={3} textColor="tertiary" caps textAlign="left">Efficiency - <span style={{'color':'#f5f5f5'}}>Concurrency</span></Heading>

            <Image src={images.concurrency_3} width="100%"/>

            </Slide>

            <Slide>
            <Heading size={3} caps textAlign="center">Efficiency</Heading>


            <Heading size={6} textColor="secondary">RPilot is simply faster than other systems</Heading>

            <Image src={images.lags} width="100%"/>
            Trigger to sound onset latency


            </Slide>

            <Slide>
            Flexibility in 3 'layers'
            Code Demo
            </Slide>

                      <CodeSlide
                      //Prism={Prism}
            transition={[]}
            lang="python"
            code={require("raw-loader!../assets/task.py")}
            ranges={[
              { loc: [0, 10], title: "Walking through some code" },
              { loc: [0, 1], title: "The Beginning" },
              { loc: [1, 2] },
              { loc: [1, 2], note: "Heres a note!" },
              { loc: [2, 3] },
              { loc: [8, 10] }
            ]}/>


            <Slide>
            Stimuli - auditory and visual

            </Slide>

            <Slide>
            Reproducibility - standardized task descriptions

            self documenting data

            expense comparison

            </Slide>

            <Slide>
            Demos

            * 2afc with sound
            * go, no go with visual stim and running wheel

            </Slide>



              </Deck>
              );
}
}
