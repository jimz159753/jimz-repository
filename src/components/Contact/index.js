import React, { Component } from 'react'
import { Row, Col, Input } from 'antd';
import './index.scss'

const { TextArea } = Input;

export default class Contact extends Component {
    render() {
        return (
            <div className='contact-content'>
                <div className='contact-title'>
                    <h1>CONTACTANOS</h1>
                    <p>Consectetur enim laboris ea eiusmod occaecat nostrud. Est ad ipsum occaecat anim id enim culpa aliqua veniam culpa. Do exercitation enim enim minim ex.</p>
                    <p>contact@gmail.com</p>
                </div>
                <div className='contact-body'>
                    <Row>
                        <Col span={8}>
                            <h1>LOGOTIPO O</h1>
                            <p>Adipisicing ea magna est et aliquip proident ex. Et sunt duis enim pariatur cillum reprehenderit occaecat consectetur adipisicing labore. </p>
                        </Col>
                        <Col span={8}>
                            <h1>MENU</h1>
                            <h4>Servicios</h4>
                            <h4>Proyectos</h4>
                            <h4>Contactos</h4>
                        </Col>
                        <Col span={8}>
                            <h1>QUEREMOS CONOCERTE</h1>
                            <Input placeholder='Nombre' />
                            <Input placeholder='Correo' />
                            <Input placeholder='Tema' />
                            <TextArea placeholder='Descripción' />
                        </Col>
                    </Row>
                </div>
                <div className='contact-footer'>
                    <p>Cillum dolor voluptate</p>
                    <div>
                        <img src={require('../../static/images/instagram.png')} width='30px' />
                        <img src={require('../../static/images/facebook.png')} width='30px' />
                        <img src={require('../../static/images/twitter.png')} width='30px' />
                        <img src={require('../../static/images/pinterest.png')} width='30px' />
                        <img src={require('../../static/images/youtube.png')} width='30px' />
                    </div>
                </div>
            </div>
        )
    }
}
