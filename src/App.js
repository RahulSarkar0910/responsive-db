import React from 'react';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import './components/css/Props.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Graph from './components/Pages/Graph';
import Aboutus from './components/Pages/AboutUs';
import Contact from './components/Pages/ContactUs';
import Dashboard from './components/Pages/Dashboard';
import Table1 from './components/Tables/table1';
import Service from './components/Pages/Service';
import Table3 from './components/Tables/table3';
import Table2 from './components/Tables/table2';
import Table4 from './components/Tables/table4';


function App() {
  return (
    <div className="App">
      <Topbar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='m-0 p-0'>
            <Sidebar />
          </div>
          <div className='col-12 col-md-6 mt-3 ml-5 m-0 p-0'>
            <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<Dashboard  />}></Route>
                <Route exact path='/Service' element={<Service  />}></Route>
                <Route exact path='/Graph' element={<Graph />}></Route>
                <Route exact path='/AboutUs' element={<Aboutus/>}></Route>
                <Route exact path='/ContactUs' element={<Contact />}></Route>
                <Route exact path='/table1' element={<Table1 />}></Route>
                <Route exact path='/table2' element={<Table2 />}></Route>
                <Route exact path='/table3' element={<Table3 />}></Route>
                <Route exact path='/table4' element={<Table4 />}></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
 