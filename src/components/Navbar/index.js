import React, { Component } from 'react'
import { Menu } from 'antd';
import './index.scss';

const { SubMenu } = Menu;

export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            current: 'mail',
        }
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };
    render() {
        const { current } = this.state;
        return (
            <div className='navbar-header'>
                <div className='navbar-content'>
                    <h1>LOGO</h1>
                    <Menu className='menu' onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="product">
                            NOSOTROS
                            </Menu.Item>
                        <Menu.Item key="product">
                            PRODUCTO
                            </Menu.Item>
                        <Menu.Item key="product">
                            CONTACTO
                            </Menu.Item>
                    </Menu>
                </div>
                <div className='navbar-title'>
                    <h2>Nostrud irure nostrud excepteur incididunt magna.</h2>
                    <h1>Tempor sunt culpa reprehenderit qui ex sunt commodo veniam nostrud reprehenderit qui.</h1>
                </div>
            </div>
        )
    }
}
