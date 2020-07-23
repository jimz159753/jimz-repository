import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './index.scss'

export default class Services extends Component {
    render() {
        return (
            <div className='services-content'>
                <Row>
                    <Col span={8}>
                        <div className='services-title'>
                            <h1>SITIOS WEB RESPONSIVOS</h1>
                            <p>In consequat enim Lorem mollit consequat magna labore ut. Nulla duis occaecat elit reprehenderit.</p>
                            <h1>DISEÑO UX / UI</h1>
                            <p>In consequat enim Lorem mollit consequat magna labore ut. Nulla duis occaecat elit reprehenderit.</p>
                            <h1>E-COMMERCE</h1>
                            <p>In consequat enim Lorem mollit consequat magna labore ut. Nulla duis occaecat elit reprehenderit.</p>
                        </div>
                    </Col>
                    <Col span={16}>
                        <img src={require('../../static/images/respnsive-site.png')} width='1024px' height='682px'/>
                    </Col>
                </Row>
            </div>
        )
    }
}
