

// Import React
import React, {PureComponent} from 'react';

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
  Link,
  List,
  ListItem,
  Notes,
  Quote,
  S,
  Slide,
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHeaderItem,
  TableItem,
  Text
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

import preloader from "spectacle/lib/utils/preloader";


import ModelViewer from 'react-3d-model-viewer'

// Video players
import 'video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';



import DataTree from './datatree';

import styled from 'react-emotion';


// export default props => {
//   return (
//     <Player>
//       <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
//     </Player>
//   );
// };


// expliticly import Prism
//import Prism from "prismjs";
//import 'prismjs/components/prism-python'
//import 'prismjs/themes/prism.css'

//window.Prism = Prism;

const ULRow = styled(TableRow)`
border-bottom: 5px solid red;
`;



// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  overview_1: require('../assets/1_overview_1.svg'),
  overview_2: require('../assets/1_overview_2.svg'),
  overview_3: require('../assets/1_overview_3.svg'),
  concurrency_1: require('../assets/concurrency_1.svg'),
  concurrency_2: require('../assets/concurrency_2.svg'),
  concurrency_3: require('../assets/concurrency_3.svg'),
  lags: require('../assets/lags.svg'),
  protocol: require('../assets/protocol.svg'),
  terminal: require('../assets/terminal.svg'),
  pilot: require('../assets/pilot.svg'),
  child: require('../assets/child.svg'),
  swarm: require('../assets/swarm.svg'),
  shared: require('../assets/shared.svg'),
  distributed: require('../assets/distributed.svg'),
  multimodal: require('../assets/multimodal.svg'),
  flexlayers: require('../assets/flexlayers.svg'),
  pokeport: require('../assets/pokeport.png')
};

const videos = {
  ourswarm: require('../videos/our_swarm.mp4')
}

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

require('file-loader?!../assets/porthole.stl');

// load file hierarchy for treebeard


export default class Presentation extends React.Component {
  render() {
    return(
<Deck
transition={['fade']}
transitionDuration={500}
theme={theme}
progress="bar"
contentWidth="95%"
contentHeight="95%"
>
<Slide bgColor="primary">
<Heading size={1} caps lineHeight={1} textColor="secondary">
RPilot
</Heading>
<Text margin="10px 0 0" textColor="tertiary" textFont="secondary">
Distributed Behavioral Experiments
</Text>

<Text textFont="secondary" textColor="quaternary" textSize={20} style={{"bottom":"20px",
"position":"fixed",
"margin": "1% auto",
"left": "0",
"right": "0",
"text-align":"center"}}>
<Link href="https://git.io/rpilot" 
textColor="quaternary"
style={{"text-decoration":"underline"}}>github
</Link> - <Link 
href="https://rpilot.readthedocs.org/" 
textColor="quaternary"
style={{"text-decoration":"underline"}}>docs
</Link> - <Link 
href="https://rpilot.net" 
textColor="quaternary"
style={{"text-decoration":"underline"}}>site (soon...)
</Link>
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
Software focus, hardware focus, rpilot is both
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

<Slide align="center center">
<Heading size={3} textColor="tertiary" caps textAlign="left">Efficiency - <span style={{'color':'#f5f5f5'}}>Libraries</span></Heading>

<Text textAlign="left" textColor="secondary">The best of both worlds:</Text>
<Text textAlign="left" textColor="secondary" textSize={24} textFont="secondary">Python 'glues' together high-performance libraries
</Text>

<List textFont="secondary">
<ListItem textSize={24}><Link textSize={36} textFont="primary" href="http://abyz.me.uk/rpi/pigpio/" textColor="tertiary">pigpio</Link> - I/O pin control/triggering with 5us precision</ListItem>
<ListItem textSize={24}><Link textSize={36} textFont="primary" href="http://jackaudio.org/" textColor="tertiary">jack</Link> - Realtime audio server</ListItem>
<ListItem textSize={24}><Link textSize={36} textFont="primary" href="https://www.qt.io/" textColor="tertiary">QT</Link> - Extensible GUI toolkit</ListItem>
<ListItem textSize={24}><Link textSize={36} textFont="primary" href="http://zeromq.org/" textColor="tertiary">ZeroMQ</Link> - High-throughput, lightweight networking</ListItem>

</List>



</Slide>

<Slide>
<Heading size={3} textColor="secondary" caps textAlign="left">Flexibility <span style={{'color':'#ff3030'}}>in 3 Layers</span></Heading>

<Image src={images.flexlayers} width="90%" />
</Slide>

<Slide>
<Heading size={3} textColor="tertiary" caps textAlign="left">Flexibility - <span style={{'color':'#f5f5f5'}}>Tasks</span></Heading>

<Image src={images.protocol} width="100%"/>
</Slide>


<CodeSlide
style={{'font-family': 'Fira Code'}}
textFont='Fira Code'
monospace={true}
transition={[]}
lang="python"
code={require("raw-loader!../assets/task.py")}
ranges={[
{ loc: [0, 1], title: "2AFC in 70 lines",
note: "Use the up and down arrow keys" },
{ loc: [0, 1], title: "Tasks are Python classes",
note: "core functionality inherited from \"Task\" parent class" },
{ loc: [0, 1], title: "Tasks need 4 attributes...",},
{ loc: [9,15], title:   "#1 - Parameters",
note: "Define details of task operation."},
{ loc: [16, 19], title: "#2 - Data",
note: "What will be returned from each trial" },
{ loc: [20, 26], title: "#3 - Plotting",
note: "Map Data to graphical elements" },
{ loc: [26, 35], title: "#4 - Hardware",
note:"Abstract mappings from names to types, configuration is systemwide" },
{ loc: [40, 42], title: "Managers",
note:"Stimulus presentation logic (sequence, synthesis, etc.) and reward delivery are handled by independently parameterized \"Managers,\" which can be arbitrarily customized without changing the Task logic." },
{ loc: [43,47], title: "No Finite-State Limitations",
note:"Trial-based tasks can have any transition logic, this is the simplest example where we just cycle through two stages infinitely" },
{ loc: [48,62], title: "Task stages are methods!"},
{ loc: [52,60], title: "Triggers are precomputed",
note:"When an input is triggered, each event is called in sequence -- here we set triggers for the 'target' and 'wrong' inputs" },
{ loc: [59,60], title: "Everything is networked",
note:"Communication between program modules, raspberry pis, and computers is trivial -- here DATA is sent back to our parent computer." },
{ loc: [63,70],
note:"Rounding out the task as expected, the classics never die." },


]}/>



<Slide>
<Heading style={{"margin-bottom":"0px"}} size={3} textColor="tertiary" caps textAlign="left">Flexibility - <span style={{'color':'#f5f5f5'}}>Agents</span></Heading>

<List ordered={true} style={{"margin-top":"0px"}}>
<ListItem textSize={36}>Manage Hardware, expose to Tasks</ListItem>
<ListItem textSize={36}>Schematize a computer's role in the swarm</ListItem>
</List>

<Layout>
<Fill>
<Image height="35%" src={images.terminal}></Image>
<Heading>Terminal</Heading>

<Appear order={1}>
<List textFont="secondary" className="tight">
  <ListItem  textSize={28}>GUI - controlling tasks</ListItem>
  <ListItem  textSize={28}>Storing, visualizing data</ListItem>
  <ListItem  textSize={28}>Creating tasks and subjects</ListItem>
  <ListItem  textSize={28}>Utilities, calibrating hardware, etc.</ListItem>
</List>
</Appear>
</Fill>

<Fill>
  <Image height="35%" src={images.pilot}></Image>
  <Heading>Pilot   </Heading>
<Appear order={2}>
<List textFont="secondary" className="tight">
  <ListItem  textSize={28}>Running tasks</ListItem>
  <ListItem  textSize={28}>Manages configuration and use of hardware</ListItem>
  <ListItem  textSize={28}>Runs as system service, uses all system resources</ListItem>
</List>
</Appear></Fill>

<Fill>
<Image height="35%" src={images.child}></Image>
<Heading>Child</Heading>
<Appear order={3}>
<List textFont="secondary" className="tight">
  <ListItem  textSize={28}>Recruited by Pilot</ListItem>
  <ListItem  textSize={28}>Auxiliary task operations</ListItem>
</List>
</Appear>
</Fill>
</Layout>
</Slide>

<Slide>
<Heading style={{"margin-bottom":"0px"}} size={3} textColor="tertiary" caps textAlign="left">Flexibility - <span style={{'color':'#f5f5f5'}}>Hardware</span></Heading>

<Text textSize={35} textColor="secondary" textFont="secondary" textAlign="left" style={{"margin-bottom":"2%"}}>The Raspberry Pi is I/O rich, use whatever hardware you want</Text> 



<Table>
  <TableHeader>
    <TableRow textColor="tertiary">
      <TableHeaderItem />
      <TableHeaderItem>Raspberry Pi</TableHeaderItem>
      <TableHeaderItem>BPod (Teensy 3.6)</TableHeaderItem>
      <TableHeaderItem>pyControl (pyboard)</TableHeaderItem>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableItem textAlign="right">CPU</TableItem>
      <TableItem textFont="secondary" textColor="#40d375">1.4Ghz x4</TableItem>
      <TableItem textFont="secondary">180MHz x1</TableItem>
      <TableItem textFont="secondary">168MHz x1</TableItem>
    </TableRow>
    <TableRow>
      <TableItem textAlign="right">Video Card</TableItem>
      <TableItem textFont="secondary" textColor="#40d375">HDMI Out</TableItem>
      <TableItem textFont="secondary" textColor="tertiary">X</TableItem>
      <TableItem textFont="secondary" textColor="tertiary">X</TableItem>
    </TableRow>
    <TableRow>
      <TableItem textAlign="right">GPIO Pins</TableItem>
      <TableItem textFont="secondary">40</TableItem>
      <TableItem textFont="secondary" textColor="#40d375">58</TableItem>
      <TableItem textFont="secondary">29</TableItem>
    </TableRow>
    <TableRow>
      <TableItem textAlign="right">USB Ports</TableItem>
      <TableItem textFont="secondary" textColor="#40d375">4</TableItem>
      <TableItem textFont="secondary">2</TableItem>
      <TableItem textFont="secondary">1</TableItem>
    </TableRow>
    <TableRow>
      <TableItem textAlign="right">Networking</TableItem>
      <TableItem textFont="secondary" textColor="#40d375">Wired/WiFi</TableItem>
      <TableItem textFont="secondary" textColor="tertiary">X</TableItem>
      <TableItem textFont="secondary" textColor="tertiary">X</TableItem>
    </TableRow>
    <TableRow>
      <TableItem textAlign="right">Camera Input</TableItem>
      <TableItem textFont="secondary" textColor="#40d375">15-Pin Serial</TableItem>
      <TableItem textFont="secondary" textColor="tertiary">X</TableItem>
      <TableItem textFont="secondary" textColor="tertiary">X</TableItem>
    </TableRow>
    <TableRow>
      <TableItem textAlign="right">Bluetooth</TableItem>
      <TableItem textFont="secondary" textColor="#40d375">✓</TableItem>
      <TableItem textFont="secondary" textColor="tertiary">X</TableItem>
      <TableItem textFont="secondary" textColor="tertiary">X</TableItem>
    </TableRow>
  </TableBody>
</Table>

</Slide>

<Slide>

<Heading style={{"margin-bottom":"0px"}} size={3} textColor="tertiary" caps textAlign="left">Flexibility - <span style={{'color':'#f5f5f5'}}>Hardware</span></Heading>
<Heading size={5} textFont="secondary" textAlign="left" textColor="secondary" style={{"margin-bottom":"40px"}}>We also provide a basic set of CAD models, BOMs, and schematics</Heading>
<span></span>

<Image src={images.pokeport} width="70%"/>


</Slide>

<Slide>
<Heading style={{"margin-bottom":"0px"}} size={3} textColor="tertiary" caps textAlign="left">Flexibility - <span style={{'color':'#f5f5f5'}}>Topology</span></Heading>

<Text textSize={35} textColor="secondary" textFont="secondary" textAlign="left" style={{"margin-bottom":"2%"}}>Swarms of networked agents make different "topologies"</Text> 

<Layout style={{'margin-bottom':'40px'}}>
<Appear>
<Fill>
<Image src={images.swarm} width="50%"></Image>
<Heading size={4} textColor="tertiary">Pilot Swarm </Heading>
<Text textColor="secondary" textFont="secondary" textAlign="center" textSize={30} style={{"width":"90%"}}>One Terminal runs tasks on many Pilots in parallel</Text>
</Fill>
</Appear>

<Appear>
<Fill>
<Image src={images.shared} width="50%"></Image>
<Heading size={4} textColor="tertiary">Shared Task</Heading>
<Text textColor="secondary" textFont="secondary" textAlign="center" textSize={30} style={{"width":"90%"}}>Subcomponents of a task are split to several specific Agents</Text>
</Fill>
</Appear>
</Layout>
<Layout>
<Appear>
<Fill>
<Image src={images.distributed} width="50%"></Image>
<Heading size={4} textColor="tertiary">Distributed Task</Heading>
<Text textColor="secondary" textFont="secondary" textAlign="center" textSize={30} style={{"width":"90%"}}>Pilots wirelessly coordinate a task in a large/naturalistic environment</Text>
</Fill>
</Appear>

<Appear>
<Fill>
<Image src={images.multimodal} width="50%"></Image>
<Heading size={4} textColor="tertiary">Multimodal Task</Heading>
<Text textColor="secondary" textFont="secondary" textAlign="center" textSize={30} style={{"width":"90%"}}>Combining multiple agent types across multiple experiments and home-cage monitoring</Text>
</Fill>
</Appear>

</Layout>

</Slide>

<Slide>
<Text textSize={35} textColor="tertiary" textFont="secondary" textAlign="center" style={{"margin-bottom":"2%"}}>(Our swarm training 10 mice in parallel)</Text> 

  <div style={{'margin':'auto',
  'width':'1280px'}}>
     <Player
     fluid={false} 
     playsInline={true}
     autoPlay={true}>
       <source src={videos.ourswarm} />
     </Player>
     </div>
</Slide>

<Slide>
<Heading style={{"margin-bottom":"0px"}} size={3} textColor="tertiary" caps textAlign="center">Reproducibility - <span style={{'color':'#f5f5f5'}}>Self-documenting data</span></Heading>

<Text className="treetext" textColor="primary" textFont="secondary" style={{"border": "10px pink", "width":"80%"}} bgColor="tertiary" textSize={36}> </Text>

<DataTree/>

</Slide>

<Slide>
<Heading style={{"margin-bottom":"0px"}} size={3} textColor="tertiary" caps textAlign="center">Reproducibility - <span style={{'color':'#f5f5f5'}}>Expense</span></Heading>
<List>
<ListItem textFont="secondary" textSize={30}>Complex tasks have long training times</ListItem>
<ListItem textFont="secondary" textSize={30}>Behavioral instrumentation can be the bottleneck</ListItem>
<ListItem textFont="secondary" textSize={30}>Low-n experiments are bad for statistical inference</ListItem>
<ListItem textFont="secondary" textSize={30} textColor="tertiary">RPilot is an order of magnitude less expensive than other systems</ListItem>
</List>

<Table>
  <TableHeader>
    <TableRow textColor="tertiary">
      <TableHeaderItem />
      <TableHeaderItem>RPilot</TableHeaderItem>
      <TableHeaderItem>BPod</TableHeaderItem>
      <TableHeaderItem>pyControl</TableHeaderItem>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableItem textAlign="right">Behavior CPU</TableItem>
      <TableItem textFont="secondary">$35</TableItem>
      <TableItem textFont="secondary">$745</TableItem>
      <TableItem textFont="secondary">$284</TableItem>
    </TableRow>
    <TableRow>
      <TableItem textAlign="right">Nosepoke (x3)</TableItem>
      <TableItem textFont="secondary">$216</TableItem>
      <TableItem textFont="secondary" >$735</TableItem>
      <TableItem textFont="secondary">$579</TableItem>
    </TableRow>
    <ULRow>
      <TableItem textAlign="right">Total for One</TableItem>
      <TableItem textFont="secondary" textColor="#40d375">$251</TableItem>
      <TableItem textFont="secondary" textColor="tertiary">$1480</TableItem>
      <TableItem textFont="secondary" textColor="tertiary">$920</TableItem>
    </ULRow>
    <Appear>
    <TableRow>
      <TableItem textAlign="right">Five Systems</TableItem>
      <TableItem textFont="secondary">$1255</TableItem>
      <TableItem textFont="secondary">$7400</TableItem>
      <TableItem textFont="secondary">$4600</TableItem>
    </TableRow>
    </Appear>
    <Appear>
    <TableRow>
      <TableItem textAlign="right">Host Computer(s)</TableItem>
      <TableItem textFont="secondary">$1000</TableItem>
      <TableItem textFont="secondary">$5000</TableItem>
      <TableItem textFont="secondary">$5000</TableItem>
    </TableRow>
    </Appear>
    <Appear>
    <ULRow>
      <TableItem textAlign="right">Total for Five</TableItem>
      <TableItem textFont="secondary" textColor="#40d375">$2255</TableItem>
      <TableItem textFont="secondary" textColor="tertiary">$12400</TableItem>
      <TableItem textFont="secondary" textColor="tertiary">$9600</TableItem>
    </ULRow>
    </Appear>
    <Appear>
    <TableRow>
      <TableItem textAlign="right">Total for Ten</TableItem>
      <TableItem textFont="secondary" textColor="#40d375">$3510</TableItem>
      <TableItem textFont="secondary" textColor="tertiary">$24800</TableItem>
      <TableItem textFont="secondary" textColor="tertiary">$19200</TableItem>
    </TableRow>
    </Appear>
  </TableBody>
</Table>



</Slide>

<Slide>
<Heading>Demos</Heading>

<List textAlign="center">
<ListItem>Auditory 2AFC</ListItem>
<ListItem>Visual go/no-go with 2 pis</ListItem>
</List>

</Slide>

<Slide>
<Heading> Limitations</Heading>
<List>
<ListItem>Immature Codebase, particularly agent framework</ListItem>
<ListItem>Raspberry Pis aren't magic</ListItem>
<ListItem>More 'hands on' than GUI-only systems (eg. labview)</ListItem>
</List>
</Slide>

<Slide>
<Heading>The Future</Heading>

<List>
<ListItem>A Library of Tasks & Hardware</ListItem>
<ListItem>More Agents - Homecage & <Link textColor="#7070ff" href='https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-nano/'>Compute</Link></ListItem>
<ListItem>Lower latency - Cython & DMA triggers</ListItem>
<ListItem>More robust Networking architecture w/ routing tables</ListItem>
<ListItem>Standardized data structure using Neurodata Without Borders</ListItem>
</List>
</Slide>

</Deck>
);
}
}
