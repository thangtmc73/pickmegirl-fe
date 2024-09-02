import { Route, Switch } from "wouter";
import Session from "pages/Session/loadable";
import Home from "pages/Home/loadable";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/session/:sessionID" component={Session} />
      <Route>404: No such page!</Route>
    </Switch>
  )
}
