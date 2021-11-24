import { Backdrop, Button, MainMenu, SubMenu } from "src/components";
import { Page } from "src/components";
import { Router, Link } from "@reach/router";
import { routes } from "src/configs";

type RoutingProps = {
  path: any;
  comp: any;
};

let RoutedPage = ({ path, comp }: RoutingProps) => comp;

export function Routes() {
  return (
    <div>
      <Backdrop>
        <Page>
          <Links routes={routes} />
          <Pages routes={routes} />
        </Page>
      </Backdrop>
    </div>
  );
}
const Links = (props: any) => (
  <SubMenu>
    {props.routes.map((d: any) => (
      <Link to={d.link}>
        <Button onClick={() => null}>{d.label}</Button>
      </Link>
    ))}
  </SubMenu>
);

const Pages = (props: any) => (
  <MainMenu>
    <Router>
      {props.routes.map((d: any) => (
        <RoutedPage path={d.link} comp={d.component}></RoutedPage>
      ))}
    </Router>
  </MainMenu>
);
