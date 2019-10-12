import * as  React from 'react';

import { Focusable, HorizontalList } from 'react-key-navigation';
export interface Istate {
    active: boolean;
  }
  export interface Iprop {
    icon?: string;
    onFocus?:Function,
    visible?:boolean,
    title?:string
  }
class ToogleItem extends React.Component<Iprop,Istate> {
    constructor(props: Iprop) {
        super(props);
    
        this.state = {
          active: false
        };
      }

  render() {
    return (
      <Focusable onFocus={() => this.setState({active: true})}
                 onBlur={() => this.setState({active: false})}>
        <div className={'item ' + (this.state.active ? 'item-focus' : '')}></div>
      </Focusable>
    );
  }
};

export default class List extends React.Component<Iprop,Istate> {
    private _lastFocus:any;
    private content:any;
    constructor(props: Iprop) {
        super(props);
    this._lastFocus = null;
  }

  componentDidMount() {
    const width = (Math.floor(this.content.scrollWidth /  this.content.clientWidth ) * this.content.clientWidth) + this.content.clientWidth + 20;
    if (this.content.getElementsByClassName('hz-list')[0]) {
      this.content.getElementsByClassName('hz-list')[0].style.width = width + 'px';
    }
  }

  onFocus(index:number) {
    if (this._lastFocus === index) {
      return;
    }

    if (this.props.onFocus) {
      this.props.onFocus();
    }

    if (this.content) {
      const items = this.content.getElementsByClassName('item');
      const offsetWidth = items[0].offsetWidth + 20;
      this.content.scrollLeft = offsetWidth * index;
    }

    this._lastFocus = index;
  }

  render() {
    return (
      <div className={"contentgroup " + (this.props.visible ? '' : 'fading-out')}>
        <h1>{this.props.title}</h1>
        <div className="content" ref={(content) => { this.content = content}}>
          <HorizontalList  className="hz-list"
                          style={{overflow: 'hidden', display: 'block'}}
                          onFocus={(index:number) => this.onFocus(index)}
                          onBlur={() => { this._lastFocus = null }}>
            <ToogleItem key="0"></ToogleItem>
            <ToogleItem key="1"></ToogleItem>
            <ToogleItem key="2"></ToogleItem>
            <ToogleItem key="3"></ToogleItem>
            <ToogleItem key="4"></ToogleItem>
            <ToogleItem key="5"></ToogleItem>
            <ToogleItem key="6"></ToogleItem>
            <ToogleItem key="7"></ToogleItem>
            <ToogleItem key="8"></ToogleItem>
          </HorizontalList>
        </div>
      </div>
    );
  }
}