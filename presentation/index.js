

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
  overview_1: require('../assets/1_overview_1.svg'),
  overview_2: require('../assets/1_overview_2.svg'),
  overview_3: require('../assets/1_overview_3.svg'),
  concurrency_1: require('../assets/concurrency_1.svg'),
  concurrency_2: require('../assets/concurrency_2.svg'),
  concurrency_3: require('../assets/concurrency_3.svg'),
  lags: require('../assets/lags.svg')

};

// Require CSS
require('../assets/main.css');

const theme = createTheme(
{
  primary: "#20201d",
  secondary: "#f5f5f5",
  tertiary: "#ff3030",
  quaternary: "#b0b0b0"
},
{
  primary: 'Staatliches',
  secondary: 'Anonymous Pro',
  tertiary: 'Fira Code'
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
            <Heading size={3} textColor="tertiary" caps textAlign="left">Efficiency - <span style={{'color':'#f5f5f5'}}>Latency</span></Heading>

            <Image src={images.lags} width="100%"/>


            </Slide>

            <Slide>
            Flexibility in 3 'layers'
            </Slide>

            <CodeSlide
            style={{'font-family': 'Fira Code'}}
            textFont='Fira Code'
            monospace={true}
            transition={[]}
            lang="python"
            code={require("raw-loader!../assets/task.py")}
            ranges={[
              { loc: [0, 1], title: "2AFC in 70 lines" },
              { loc: [0, 1], title: "Tasks are Python classes",
                             note: "core functionality inherited from \"Task\" parent class" },
              { loc: [0, 1], title: "Tasks need 4 attributes...",},
              { loc: [9,15], title:   "#1 - Parameters",
              note: "Define task operation"},
              { loc: [16, 19], title: "#2 - Data",
              note: "What will be returned from each trial" },
              { loc: [20, 26], title: "#3 - Plotting",
              note: "Map Data to graphical elements" },
              { loc: [26, 35], title: "#4 - Hardware",
              note:"Abstract mappings from names to types, configuration is systemwide" },
              { loc: [38, 40], title: "Managers",
              note:"Stimulus presentation logic (sequence, synthesis, etc.) and reward delivery are handled by independently parameterized \"Managers,\" which can be arbitrarily customized without changing the Task logic." },
              { loc: [41,47], title: "No Finite-State Limitations",
              note:"Trial-based tasks can have any transition logic, this is the simplest example where we just cycle through two stages infinitely" },
              { loc: [48,62], title: "Task stages are methods!"},
              { loc: [52,60], title: "Triggers are precomputed",
              note:"When an input is triggered, each event is called in sequence -- here we set triggers for the 'target' and 'wrong' inputs" },
              { loc: [59,60], title: "Everything is networked",
              note:"Communication between program modules, raspberry pis, and computers is trivial -- here DATA is sent back to our parent computer." },
              { loc: [61,70],
              note:"Rounding out the task as expected, the classics never die." },


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

            <Slide>
            <Heading> Limitations</Heading>
            <List>
            <ListItem>Immature Codebase - but hey so is everyone else's</ListItem>
            </List>
            </Slide>


              </Deck>
              );
}
}
