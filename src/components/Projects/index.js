import React, { Component } from 'react'
import { Divider, Row, Col, Button } from 'antd';
import './index.scss';

export default class Projects extends Component {
    render() {
        return (
            <div className='projects-content'>
                <h1>PROYECTOS</h1>
                <p>Dolore magna ea officia proident proident eiusmod non aute tempor non laboris proident consequat culpa. Duis nulla voluptate aliquip dolor elit. Reprehenderit aliqua ea duis consequat do cupidatat ut velit. Eiusmod voluptate magna sunt qui cillum incididunt. Fugiat adipisicing quis mollit exercitation minim consectetur non Lorem nisi consequat aute.</p>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12} xl={6}> 
                        <img src='https://media.istockphoto.com/photos/portrait-of-handsome-afro-man-using-his-mobile-picture-id890698790' height='350px' width='100%' />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={6}> 
                    <img src='https://media.istockphoto.com/photos/man-holding-smart-phone-with-blurred-background-picture-id692682044' height='350px' width='100%' />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={6}> 
                        <img src='https://media.istockphoto.com/photos/smart-phone-showing-credit-score-on-a-screen-picture-id1089339790' height='350px' width='100%' />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={6}> 
                        <img src='https://media.istockphoto.com/photos/young-woman-blogger-in-spectacles-publishing-new-post-on-own-website-picture-id1158475162' height='350px' width='100%' />
                    </Col>
                </Row>
                <Button>CONOCER MAS PROYECTOS</Button>
            </div>
        )
    }
}
