import * as  React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Focusable } from 'react-key-navigation';
export interface Istate {
    active: boolean;
  }
  export interface Iprop {
    icon?: string;
    onFocus?:Function,
    visible?:boolean,
    title?:string
  }
  export default class Tile extends React.Component<Iprop,Istate> {
    constructor(props: Iprop) {
        super(props);
    
        this.state = {
          active: false
        };
      }
      onEnterDown(event:any, navigation:any) {
        console.log('enter pressed');
        alert("open");
      }

  render() {
      
    return (
        <Grid item xs={3}>
                <Focusable onFocus={() => this.setState({active: true})}
                 onBlur={() => this.setState({active: false})} onEnterDown={(e:any, n:any) => this.onEnterDown(e, n)}>
                     <Paper className={'item ' + (this.state.active ? 'item-focus' : '')}>
                     
                     </Paper>
                </Focusable>
                   
        </Grid>
      
    );
  }
};