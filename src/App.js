import React from 'react';
import { Routes ,Route } from "react-router-dom";

import { Page, Grid } from "@shopify/polaris";

import NavBar from './components/common/NavBar';
import SideBar from './components/common/SideBar';
import Dashboard from './components/Dashbord';
import About from './components/About';

function App() {
  return (
    <Page fullWidth>
      <Grid
          columns={{ md: 6, lg: 6, xl: 6 }}
          areas={{
            md: [
              "nav nav nav nav nav nav",
              "sideBar body body body body body",
            ],
            lg: [
              "nav nav nav nav nav nav",
              "sideBar body body body body body",
            ],
            xl: [
              "nav nav nav nav nav nav",
              "sideBar body body body body body",
            ],
          }}
        >
        <Grid.Cell area="nav">
          <NavBar />
        </Grid.Cell>
        <Grid.Cell area="sideBar">
          <SideBar />
        </Grid.Cell>
        <Grid.Cell area="body">
          <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
          </Routes>
        </Grid.Cell>
      </Grid>
    </Page>
  );
}

export default App;
