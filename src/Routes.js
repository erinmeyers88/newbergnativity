import React from 'react';
import Home from "./Home";
import {Route} from "react-router-dom";
import Animals from "./Animals";
import History from "./History";
import Photos from "./Photos";

const Routes = (routeProps) => {
  return <>
  <Route exact path={["/", "/home"]} render={(props) => <Home {...props} {...routeProps}/>}/>
  <Route path="/animals" render={(props) => <Animals {...props} {...routeProps}/>}/>
  <Route path="/history" render={(props) => <History {...props} {...routeProps}/>}/>
  <Route path="/photos" render={(props) => <Photos {...props} {...routeProps}/>}/>
</>};

export default Routes;
