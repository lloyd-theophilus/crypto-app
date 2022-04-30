import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components'
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" component={(Home) => <div>Home</div>} />
              <Route
                exact
                path="/exchanges"
                component={(Exchanges) => <div>Exchanges</div>}
              />
              <Route
                exact
                path="/cryptocurrencies"
                component={(Cryptocurrencies) => <div>Cryptocurrencies</div>}
              />
              <Route
                exact
                path="/crypto/:coinId"
                component={(CryptoDetail) => <div>CryptoDetails</div>}
              />
              <Route exact path="/news" component={(News) => <div>News</div>} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Lloyd Digital <br />
            Crypto App <br />
            All Rights Reserved © 2022
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/news">News</Link>
            </Space>
         
        </div>
      </div>
    </div>
  );
}

export default App