// treebeard to show file hierarchy

import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import {Treebeard, decorators} from 'react-treebeard';
import PropTypes from 'prop-types';
import * as filters from './filters';
import styles from './tb_styles'

const JsonTable = require('ts-react-json-table');

import {CodePane} from 'spectacle';

import styled from '@emotion/styled';


const data = [
{
    name: 'current_task',
    content:{
        "step_name" : "tone discrim",
        "task_type" : "2AFC",
        "bias_mode" :0,
        "punish_sound" : false,
        "stim" : {
          "sounds" : {
            "L": {
                "duration" : 100,
                "frequency" : 10000,
                "type" : "tone", 
                "amplitude" : 0.01},
            "R": {"...":"..."}
        }},
        "reward": {
            "type" : "constant_time",
            "duration" : 30
        }, 
        "graduation" : {
            "type" : "accuracy", "threshold" : 0.75, "window" : 400},
        },
        text:"Protocols are saved alongside data as portable JSON"
        },
{
    name: 'data',
    text: 'data are stored as hdf5 tables organized by task',
    children: [
        {name: 'task_name',
        toggled:true,
        children: [
        {name: "S00_free_water",
        children: {name:'trial_data',
        table: true,
        content: [{"response":"R","target":"L","trial_num":0,"correct":0,"freq":4000},{"response":"L","target":"R","trial_num":1,"correct":0,"freq":8000},{"response":"L","target":"L","trial_num":2,"correct":1,"freq":4000},{"response":"R","target":"L","trial_num":3,"correct":0,"freq":4000},{"response":"R","target":"R","trial_num":4,"correct":1,"freq":8000},{"response":"R","target":"R","trial_num":5,"correct":1,"freq":8000},{"response":"L","target":"R","trial_num":6,"correct":0,"freq":8000},{"response":"R","target":"L","trial_num":7,"correct":0,"freq":4000},{"response":"L","target":"L","trial_num":8,"correct":1,"freq":4000},{"response":"R","target":"L","trial_num":9,"correct":0,"freq":4000},{"response":"R","target":"R","trial_num":10,"correct":1,"freq":8000},{"response":"R","target":"L","trial_num":11,"correct":0,"freq":4000},{"response":"L","target":"L","trial_num":12,"correct":1,"freq":4000},{"response":"L","target":"R","trial_num":13,"correct":0,"freq":8000},{"response":"R","target":"R","trial_num":14,"correct":1,"freq":8000}]}},
        {name: "S01_shaping_step",
        children: {name:'trial_data',
        table: true,
        content: [{"response":"R","target":"L","trial_num":0,"correct":0,"freq":4000},{"response":"L","target":"R","trial_num":1,"correct":0,"freq":8000},{"response":"L","target":"L","trial_num":2,"correct":1,"freq":4000},{"response":"R","target":"L","trial_num":3,"correct":0,"freq":4000},{"response":"R","target":"R","trial_num":4,"correct":1,"freq":8000},{"response":"R","target":"R","trial_num":5,"correct":1,"freq":8000},{"response":"L","target":"R","trial_num":6,"correct":0,"freq":8000},{"response":"R","target":"L","trial_num":7,"correct":0,"freq":4000},{"response":"L","target":"L","trial_num":8,"correct":1,"freq":4000},{"response":"R","target":"L","trial_num":9,"correct":0,"freq":4000},{"response":"R","target":"R","trial_num":10,"correct":1,"freq":8000},{"response":"R","target":"L","trial_num":11,"correct":0,"freq":4000},{"response":"L","target":"L","trial_num":12,"correct":1,"freq":4000},{"response":"L","target":"R","trial_num":13,"correct":0,"freq":8000},{"response":"R","target":"R","trial_num":14,"correct":1,"freq":8000}]}},
        {name: "S02_tone_discrim",
        children: {name:'trial_data',
        table: true,
        content: [{"response":"R","target":"L","trial_num":0,"correct":0,"freq":4000},{"response":"L","target":"R","trial_num":1,"correct":0,"freq":8000},{"response":"L","target":"L","trial_num":2,"correct":1,"freq":4000},{"response":"R","target":"L","trial_num":3,"correct":0,"freq":4000},{"response":"R","target":"R","trial_num":4,"correct":1,"freq":8000},{"response":"R","target":"R","trial_num":5,"correct":1,"freq":8000},{"response":"L","target":"R","trial_num":6,"correct":0,"freq":8000},{"response":"R","target":"L","trial_num":7,"correct":0,"freq":4000},{"response":"L","target":"L","trial_num":8,"correct":1,"freq":4000},{"response":"R","target":"L","trial_num":9,"correct":0,"freq":4000},{"response":"R","target":"R","trial_num":10,"correct":1,"freq":8000},{"response":"R","target":"L","trial_num":11,"correct":0,"freq":4000},{"response":"L","target":"L","trial_num":12,"correct":1,"freq":4000},{"response":"L","target":"R","trial_num":13,"correct":0,"freq":8000},{"response":"R","target":"R","trial_num":14,"correct":1,"freq":8000}]}}]} 
    ]
},
{
    name: 'history',
    toggled:false,
    text: 'any changes to tasks, parameters, etc. are logged as history',
    children: [
    {
        name: 'git_hashes',
        text: 'the version of code running the task and any local modifications are logged so the experiment can be reproduced exactly',
        content: [{"diff":"--- a\/rpilot\/core\/terminal.py\n+++ b\/rpilot\/core\/terminal.py\n@@ -289,7 +289,6 @@ class Terminal(QtGui.QMainWindow):\n     # Listens & inter-object methods\n \n     def toggle_start(self, starting, pilot, mouse=None):\n-        # type: (bool, unicode, unicode) -> None\n","hash":"6d99057d","timestamp":"2019-04-12"}],
        table: true
    },
    {
        name: 'parameter_history'
    },
    {
        name: 'past_protocols'
    },
    {
        name: 'weights',
        text: 'other subject-specific historical data, like weights, can be logged as well'
    }]
},
{
    name: 'info',
    text: 'biographical information for the subject',
    children: [
        {
            name: 'animal_id',
            content: 'animal_id_059594'
        },
        {
            name: "birth_date",
            content: "2000-01-01"
        },
        {
            name: "genotype",
            content: {
                cre: 'ChR2a',
                lox: 'Parvalbumin'
            }
        }
    ]
}
];

const DivStyled = styled('div', {
    shouldForwardProp: prop => ['className', 'children'].indexOf(prop) !== -1
})(({style}) => style);

const HELP_MSG = '';

// Example: Customising The Header Decorator To Include Icons
decorators.Header = ({style, node}) => {
    const iconType = node.children ? 'folder' : 'file-text';
    const iconClass = `fa fa-${iconType}`;
    const iconStyle = {marginRight: '5px'};

    return (
            <DivStyled style={style.base}>
            <DivStyled style={style.title}>
            <i className={iconClass} style={iconStyle}/>

            {node.name}
            </DivStyled>
            </DivStyled>
            );
};

class NodeViewer extends PureComponent {
    render() {
        const style = styles.viewer;
        var label_text;
        var labelnode;
        let json;


        try {
            json = JSON.stringify(this.props.node['content'], null, 2);
            //const newNode = document.createElement('div');
        } catch(err) {
            json = JSON.stringify(this.props.node, null, 4);
        }


        if (!json) {
            json = HELP_MSG;
        }



        try{
            label_text = this.props.node['text'];
        } catch(err){
            console.log(err);
            label_text = " ";
        }

        try{
            labelnode = document.getElementsByClassName("treetext")[0].textContent = label_text;
        //labelnode.textContent = "newtext";
        //this.refs.treetext.text = "newtest";
    } catch(err){
        console.log(err);
    }
    //return {json}</DivStyled>;

    return <DivStyled style={style.base}>{json}</DivStyled>;
    
    //return(json);

}

}

NodeViewer.propTypes = {
    node: PropTypes.object
};

export default class DataTree extends PureComponent {
    constructor() {
        super();

        this.state = {data};
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(node, toggled) {
        const {cursor} = this.state;

        if (cursor) {
           cursor.active = false;
        }

        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }

        this.setState({cursor: node});
    }

    onFilterMouseUp(e) {
        const filter = e.target.value.trim();
        if (!filter) {
            return this.setState({data});
        }
        var filtered = filters.filterTree(data, filter);
        filtered = filters.expandFilteredNodes(filtered, filter);
        this.setState({data: filtered});
    }

    returnDiv(input){
        return(input)
    }

    componentDidUpdate(){
        window.Prism.highlightAll();
    }

    render() {
        const {data: stateData, cursor} = this.state;
        let node = cursor;

        const style = styles.viewer;
        var label_text;
        var labelnode;
        var json;

        let is_table = false;

        // first try to see if it's a table
        try{
            is_table = node['table'];
        } catch(err){
            console.log(err);
        }
        if (is_table == true){
            json = node['content'];
        } else {
          try {
                //console.log(JSON.stringify(node['content'], null, 4));
                json = JSON.stringify(node['content'], null, 4);
                //const newNode = document.createElement('div');
            } catch(err) {
                console.log(err);
                json = JSON.stringify(node, null, 4);
            }
            }  


        if (!json) {
            json = HELP_MSG;
        }



        try{
            label_text = node['text'];
        } catch(err){
            console.log(err);
            label_text = " ";
        }

        try{
            labelnode = document.getElementsByClassName("treetext")[0].textContent = label_text;
        //labelnode.textContent = "newtext";
        //this.refs.treetext.text = "newtest";
        } catch(err){
            console.log(err);
        }
        //return {json}</DivStyled>;


        //let NewElement = React.createElement(json);
        console.log(json)
        if (is_table == true)
        {return (
                <DivStyled>
                <DivStyled style={styles.component}
                className="datatree">
                <Treebeard data={stateData}
                decorators={decorators}
                onToggle={this.onToggle}/>
                </DivStyled>
                <DivStyled style={styles.component}
                className="datatree">
                <JsonTable rows={json}/>
                </DivStyled>
                </DivStyled>
                );
        } else {
          return (
                <DivStyled>
                <DivStyled style={styles.component}
                className="datatree">
                <Treebeard data={stateData}
                decorators={decorators}
                onToggle={this.onToggle}/>
                </DivStyled>
                <DivStyled style={styles.component}
                className="datatree">

                <pre>
                <code class="language-json no-whitespace-normalization">
                {json}
                </code>
                </pre>
                </DivStyled>
                </DivStyled>
                );  
        }
        
    }
}
