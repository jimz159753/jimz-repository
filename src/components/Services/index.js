import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './index.scss'

export default class Services extends Component {
    render() {
        return (
            <div className='services-content'>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                        <img src={require('../../static/images/bannner-caracteristicas.jpg')} className='background' />
                        <div className='services-title'>
                            <h1>SITIOS WEB RESPONSIVOS</h1>
                            <p>In consequat enim Lorem mollit consequat magna labore ut. Nulla duis occaecat elit reprehenderit.</p>
                            <h1>DISEÑO UX / UI</h1>
                            <p>In consequat enim Lorem mollit consequat magna labore ut. Nulla duis occaecat elit reprehenderit.</p>
                            <h1>E-COMMERCE</h1>
                            <p>In consequat enim Lorem mollit consequat magna labore ut. Nulla duis occaecat elit reprehenderit.</p>
                        </div>

                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={16}>
                        <img src={require('../../static/images/respnsive-site.png')} width='100%' height='100%' />
                    </Col>
                </Row>
            </div>
        )
    }
}

