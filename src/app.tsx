import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import Navigation, {VerticalList, HorizontalList, Grid, Focusable} from 'react-key-navigation';

import Sidebar from './Sidebar';
import List from './List';
import Search from './Search';
function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built by abhishek Kammakki using "}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
    </Typography>
  );
}
export interface Istate {
  active: number;
}
export interface Iprop {
  icon?: string;
}
export class App extends React.Component<Iprop,Istate> {
  private lists:string[];
  constructor(props: any) {
    super(props);

    this.state = {
      active: -1,
    }

    this.lists = ["Title 1", "Title 2", "Title 3", "Title 4"]
  }

  changeFocusTo(index:number) {
    this.setState({active: index});
  }

  onBlurLists() {
    this.setState({active: -1});
  }
  render() {
    return (
      <Container maxWidth="xl">
      <Box>
      <Navigation>
        <div id="container">
          <HorizontalList>
            <Sidebar/>
            <div className="mainbox">
              <VerticalList navDefault>
                <Search/>
                <VerticalList id="content" onBlur={() => this.onBlurLists()}>
                  {this.lists.map((list, i) =>
                    <List key={i} title={list} onFocus={() => this.changeFocusTo(i)} visible={this.state.active !== null ? i >= this.state.active : true}/>
                  )}
                </VerticalList>
              </VerticalList>
            </div>
          </HorizontalList>
        </div>
      </Navigation>
      </Box>
      <Box my={1}>
        <MadeWithLove />
      </Box>
    </Container>
    );
  }
}
export default App;
