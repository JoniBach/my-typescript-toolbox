import { Backdrop, Button, MainMenu, SubMenu } from 'src/components';
import { Page } from 'src/components';
import { Router, RouteComponentProps, Link } from "@reach/router"
import { Card, Skate, Test } from 'src/pages';
import { Charts } from './pages/Charts';

let SkatePage = (props: RouteComponentProps) => <Skate />
let TestPage = (props: RouteComponentProps) => <Test />
let CardPage = (props: RouteComponentProps) => <Card />
let ChartsPage = (props: RouteComponentProps) => <Charts />

function App() {
  return (
    <div>
      <Backdrop>
        <Page>
          <SubMenu >
            <Link to='/skate'><Button onClick={() => null}>Skate</Button></Link>
            <Link to='/test'><Button onClick={() => null}>Test</Button></Link>
            <Link to='/card'><Button onClick={() => null}>Card</Button></Link>
            <Link to='/charts'><Button onClick={() => null}>Charts</Button></Link>
          </SubMenu>
          <MainMenu>
            <Router>
              <SkatePage path="/skate" />
              <TestPage path='/test' />
              <CardPage path='/card' />
              <ChartsPage path='/charts' />
            </Router>
          </MainMenu>
        </Page>
      </Backdrop>
    </div>
  );
}

export default App;
