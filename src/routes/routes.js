import { Switch, Route } from 'react-router-dom'
import FilmsListPage from  "../container/Films/FilmsListPage" ;
import React from 'react';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/films' component={FilmsListPage}/>
    </Switch>
  </main>
)

export default Main;