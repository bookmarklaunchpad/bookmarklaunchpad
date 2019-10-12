import * as React from 'react';

import { Focusable } from 'react-key-navigation'
import { createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';



export interface Istate {
    active: string;
    value:string;
  }
  export interface Iprop {
    icon?: string;
    
  }
export default class Search extends React.Component <Iprop,Istate>{
  constructor(props: Iprop) {
    super(props);

    this.state = {
      active: "",
      value:""
    };
   
  }

  onBlur() {
    this.setState({active: ""});
     // @ts-ignore
     document.getElementById("AddTileInput").blur();
  }

  onFocus(name:string) {
    this.setState({active: name});
    if(name === "input"){
         // @ts-ignore
         document.getElementById("AddTileInput").focus();
    }else{
         // @ts-ignore
        document.getElementById("AddTileInput").blur();
    }
  }

  onEnterDown(name:string) {
    console.log('enter pressed');
    if(name === "input"){
        
        // @ts-ignore
        document.getElementById("AddTileInput").focus();
        
        
    }else{
        let list = [];
    let tiles = window.localStorage.getItem("tiles");
    if(tiles){
        list = JSON.parse(tiles);
    }
    list.push({
        url:this.state.value,
        title:this.state.value
      });
      window.localStorage.setItem("tiles",JSON.stringify(list));
      this.setState({value:""});
    }
    
    
  }
  handleChange(event: React.ChangeEvent<HTMLInputElement>){
      this.setState({value:event.target.value});
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
            backgroundColor: this.state.active === "button"?"#666":"#FFF",
            color: this.state.active === "button"?"#FFF":"#666"
        },
        iconButtonKey: {
            backgroundColor: this.state.active === "input"?"#666":"#FFF",
            color: this.state.active === "input"?"#FFF":"#666"
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
             onChange={this.handleChange.bind(this)}
             value={this.state.value}
                placeholder="Website URL"
                disabled={this.state.active !=="input"}
                inputProps={{ disabled:this.state.active !=="input",'aria-label': 'Website URL' }}
            />
             <Focusable  onFocus={() => this.onFocus("button")} onBlur={() => this.onBlur()} onEnterDown={(e:any, n:any) => this.onEnterDown("button")} navDefault>
                <IconButton style={classes.iconButton} id="AddTile"  aria-label="add website">
                    <i style={classes.icon} className="fa fa-plus-square"></i>
                </IconButton>
            </Focusable>
            <Focusable style={classes.input} onFocus={() => this.onFocus("input")} onBlur={() => this.onBlur()} onEnterDown={(e:any, n:any) => this.onEnterDown("input")} >
                <IconButton style={classes.iconButtonKey} id="AddTileInputKeyboard" aria-label="add website">
                    <i style={classes.icon} className="fa fa-keyboard-o"></i>
                </IconButton> 
            </Focusable>
           
            </Paper>
            </div>
     
    );
  }
}