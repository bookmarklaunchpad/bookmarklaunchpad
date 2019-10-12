import * as React from 'react';

import { Focusable } from 'react-key-navigation'
export interface Istate {
    active: boolean;
  }
  export interface Iprop {
    icon?: string;
  }
export default class Search extends React.Component <Iprop,Istate>{
  constructor(props: Iprop) {
    super(props);

    this.state = {
      active: false
    };
  }

  onBlur() {
    this.setState({active: false});
  }

  onFocus() {
    this.setState({active: true});
  }

  onEnterDown(event:any, navigation:any) {
    console.log('enter pressed');
    navigation.forceFocus('sidebar');
  }

  render() {
    return (
      <Focusable onFocus={() => this.onFocus()} onBlur={() => this.onBlur()} onEnterDown={(e:any, n:any) => this.onEnterDown(e, n)} navDefault>
        <div className={this.state.active ? 'search-box-placeholder-focus' : ''} id="search-box-placeholder"><i className="fa fa-search"></i></div>
      </Focusable>
    );
  }
}