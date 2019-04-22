// treebeard to show file hierarchy

import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import {Treebeard, decorators} from 'react-treebeard';
import PropTypes from 'prop-types';
import * as filters from './filters';
import styles from './tb_styles'

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
        children: {name:'trial_data'}},
        {name: "S01_shaping_step",
        children: {name:'trial_data'}},
        {name: "S02_tone_discrim",
        children: {name:'trial_data'}}]} 
    ]
},
{
    name: 'history',
    toggled:false,
    text: 'any changes to tasks, parameters, etc. are logged as history',
    children: [
    {
        name: 'git_hashes',
        text: 'the version of code running the task and any local modifications are logged so the experiment can be reproduced exactly'
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

    render() {
        const {data: stateData, cursor} = this.state;

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
                <NodeViewer node={cursor}/>
                </DivStyled>
                </DivStyled>
                );
    }
}
