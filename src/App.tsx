import './App.css';
import { Backdrop, Button, MainMenu, SubMenu } from './components';
import { Page } from './components';
import { Router, RouteComponentProps, Link } from "@reach/router"
import { Card, Skate, Test } from './pages';

let SkatePage = (props: RouteComponentProps) => <Skate />
let TestPage = (props: RouteComponentProps) => <Test />
let CardPage = (props: RouteComponentProps) => <Card />

function App() {
  return (
    <div>
      <Backdrop>
        <Page>
          <SubMenu >
            <Link to='/skate'><Button onClick={() => null}>Skate</Button></Link>
            <Link to='/test'><Button onClick={() => null}>Test</Button></Link>
            <Link to='/card'><Button onClick={() => null}>Card</Button></Link>
          </SubMenu>
          <MainMenu>
            <Router>
              <SkatePage path="/skate" />
              <TestPage path='/test' />
              <CardPage path='/card' />
            </Router>
          </MainMenu>
        </Page>
      </Backdrop>
    </div>
  );
}

export default App;
