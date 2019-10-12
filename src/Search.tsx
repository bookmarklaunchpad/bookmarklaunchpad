import * as React from 'react';

import { Focusable } from 'react-key-navigation'
import { createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';



export interface Istate {
    active: string;
  }
  export interface Iprop {
    icon?: string;
  }
export default class Search extends React.Component <Iprop,Istate>{
  constructor(props: Iprop) {
    super(props);

    this.state = {
      active: ""
    };
  }

  onBlur() {
    this.setState({active: ""});
  }

  onFocus(name:string) {
    this.setState({active: name});
    if(name === "input"){
         // @ts-ignore
         document.getElementById("AddTileInput").focus();
    }
  }

  onEnterDown(name:string) {
    console.log('enter pressed');
    if(name === "input"){
        
        // @ts-ignore
        document.getElementById("AddTileInput").focus();
        
        
    }
    
    
  }

  render() {
      
    const classes:any = createStyles({
        root: {
          padding: '2px 4px',
          display: 'flex',
         
          alignItems: 'center',
          backgroundColor: this.state.active !== ""?"#FFF":"#DDD"

        },
        input: {
          marginLeft: "5px",
          
        },
        inputbase: {
            marginLeft: "5px",
          flex: 1
          },
        iconButton: {
          color: this.state.active === "button"?"#FFF":"#666",
        },
        icon:{
            font:"28px"
        },
        divider: {
            marginBottom:"10px"
        },
      });
    
    return (
      
          <div style={classes.divider}>
          <Paper style={classes.root}>
            <InputBase 
             id="AddTileInput"
             style={classes.inputbase}
                placeholder="Website URL"
                inputProps={{ 'aria-label': 'Website URL' }}
            />
             <Focusable style={classes.iconButton} onFocus={() => this.onFocus("button")} onBlur={() => this.onBlur()} onEnterDown={(e:any, n:any) => this.onEnterDown("button")} navDefault>
                <IconButton id="AddTile"  aria-label="add website">
                    <i style={classes.icon} className="fa fa-plus-square"></i>
                </IconButton>
            </Focusable>
            <Focusable style={classes.input} onFocus={() => this.onFocus("input")} onBlur={() => this.onBlur()} onEnterDown={(e:any, n:any) => this.onEnterDown("input")} >
                <IconButton id="AddTileInputKeyboard"  aria-label="add website">
                    <i style={classes.icon} className="fa fa-keyboard-o"></i>
                </IconButton> 
            </Focusable>
           
            </Paper>
            </div>
     
    );
  }
}