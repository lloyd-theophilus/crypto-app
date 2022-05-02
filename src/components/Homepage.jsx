import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic, Button } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'

const { Title } = Typography

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(12)

  //Getting access to all the global data
  const globalStats = data?.data?.stats
  
  if (isFetching) {
    return 'Loading...'
  }

  return (
    <>
      <Title level={2} className="heading">
        {" "}
        World Crypto Statistics
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges, { precision: 1 })}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap, { precision: 1 })}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume, { precision: 1 })}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets, { precision: 1 })}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 12 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">
            <Button type="primary" shape="round" size='large'>
              Show more
            </Button>
          </Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">
            <Button type="primary" shape="round" size='large'>
              Show more
            </Button>
          </Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
}

export default Homepage