import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './index.scss';

export default class AboutUs extends Component {
    render() {
        return (
            <div className='aboutus-content'>
                <Row>
                    <Col span={12}>
                        <img src='https://www.muycomputerpro.com/wp-content/uploads/2019/11/Laptop3.jpg' width='500px'/>
                    </Col>
                    <Col span={12}>
                        <div className='aboutus-title'>
                            <h1>NOSOTROS</h1>
                            <p>In consequat enim Lorem mollit consequat magna labore ut. Nulla duis occaecat elit reprehenderit. Ex proident ullamco consectetur ut id aliquip ea amet ex nisi incididunt. Pariatur fugiat reprehenderit sit pariatur. Ex dolore incididunt irure sunt reprehenderit dolor culpa irure nostrud laborum ut aliqua labore.</p>
                            <p>In consequat enim Lorem mollit consequat magna labore ut. Nulla duis occaecat elit reprehenderit. Ex proident ullamco consectetur ut id aliquip ea amet ex nisi incididunt. Pariatur fugiat reprehenderit sit pariatur. Ex dolore incididunt irure sunt reprehenderit dolor culpa irure nostrud laborum ut aliqua labore.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
