import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography

const Homepage = () => {
  return (
    <>
      <Title level={2} className="heading">
        {" "}
        World Crypto Statistics
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={millify(1818, { precision: 1 })}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(1818, { precision: 1 })}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(1818, { precision: 1 })}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24 Hour Volume"
            value={millify(1818, { precision: 1 })}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(1818, { precision: 1 })}
          />
        </Col>
        
      </Row>
    </>
  );
}

export default Homepage