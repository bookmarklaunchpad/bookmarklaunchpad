import * as React from 'react';
import { Focusable, VerticalList } from 'react-key-navigation';

export interface Istate {
  active: boolean;
}
export interface Iprop {
  icon?: string;
}
class ToogleItem extends React.Component<Iprop,Istate> {
  constructor(props: Iprop) {
    super(props);
    this.state = {
      active: false
    }
  }
  render() {
    return (
      <Focusable onFocus={() => this.setState({active: true})}
                 onBlur={() => this.setState({active: false})}>
        <div className={'item ' + (this.state.active ? 'item-focus' : '')}>
          <i className={"fa fa-" + this.props.icon}></i> {this.props.children}
        </div>
      </Focusable>
    );
  }
};

export default class Sidebar extends React.Component<Iprop,Istate> {
  constructor(props: any) {
    super(props);

    this.state = {
      active: false
    }
  }

  setActive(status:boolean) {
    this.setState({active: status});
  }

  render() {
    return (
      <div id="sidebar" className={this.state.active ? 'focused' : ''}>
        <div id="icons">
          <div><span className="fa fa-home"></span></div>
          <div><span className="fa fa-star"></span></div>
          <div><span className="fa fa-music"></span></div>
          <div><span className="fa fa-ellipsis-v"></span></div>
        </div>
        <div id="menu">
          <VerticalList onFocus={() => this.setActive(true)}
                        onBlur={() => this.setActive(false)} focusId="sidebar" retainLastFocus={true}>
            <ToogleItem icon="user">Login</ToogleItem>
            <ToogleItem icon="search">Search</ToogleItem>
            <ToogleItem icon="home">Home</ToogleItem>
            <ToogleItem icon="star">Star</ToogleItem>
            <ToogleItem icon="music">Music</ToogleItem>
            <ToogleItem icon="film">Film</ToogleItem>
          </VerticalList>
        </div>
      </div>
    );
  }
}