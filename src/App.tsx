import { Route, Switch } from "wouter";
import Session from "pages/Session/loadable";

export default function App() {
  return (
    <Switch>
      <Route path="/session/:sessionID" component={Session} />
      <Route>404: No such page!</Route>
    </Switch>
  )
}
