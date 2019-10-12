import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Grid from '@material-ui/core/Grid';
import Navigation, {VerticalList, HorizontalList} from 'react-key-navigation';
import Tile from './Tile';
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
  lists:{url:string;title:string;}[];
}
export interface Iprop {
  icon?: string;
}
export class App extends React.Component<Iprop,Istate> {
 
  constructor(props: any) {
    super(props);

    let list = [];
    let tiles = window.localStorage.getItem("tiles");
    if(!tiles || JSON.parse(tiles).length ===0){
      //show some default tiles
      list = [{
        url:"https://google.com",
        title:"Google"
      }];
    }else{
      // @ts-ignore
      list = JSON.parse(tiles);
    }
    this.state = {
      active: -1,
      lists:list
    }
    this.refresh = this.refresh.bind(this);
   
  }
  refresh(){
    let list = [];
    let tiles = window.localStorage.getItem("tiles");
    // @ts-ignore
    list = JSON.parse(tiles);
    this.setState({lists:list});
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
            <div className="mainbox">
              <VerticalList navDefault>
                <Search/>
                <VerticalList id="content" onBlur={() => this.onBlurLists()}>
                <Grid container spacing={3}>
                  {this.state.lists.map((list, i) =>
                     
                     
                       <Tile  key={i} title={list.title} url={list.url} onListChange={this.refresh}/>
                    
                  )}
                   </Grid>
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
