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
}
export interface Iprop {
  icon?: string;
}
export class App extends React.Component<Iprop,Istate> {
  private lists:{url:string;title:string;}[];
  constructor(props: any) {
    super(props);

    this.state = {
      active: -1,
    }
    let tiles = window.localStorage.getItem("tiles");
    if(!tiles || JSON.parse(tiles).length ===0){
      //show some default tiles
      this.lists = [{
        url:"https://google.com",
        title:"Google"
      }];
    }else{
      // @ts-ignore
    this.lists = JSON.parse(tiles);
    }
     
   
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
                  {this.lists.map((list, i) =>
                     
                     
                       <Tile  key={i} title={list.title} url={list.url}/>
                    
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
