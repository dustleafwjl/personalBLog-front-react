import React from 'react'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class DLMenu extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="home">
                <Icon type="home" />
                HOME
            </Menu.Item>
            <Menu.Item key="Blog">
                <Icon type="book" />
                BLOG
            </Menu.Item>
            <Menu.Item key="About">
                <Icon type="smile" />
                ABOUT
            </Menu.Item>
            <Menu.Item key="Guestbook">
                <Icon type="message" />
                BUESTBOOK
            </Menu.Item>
            <SubMenu
                title={
                    <span className="submenu-title-wrapper">
                        <Icon type="ellipsis" />
                        OTHER
                    </span>
                }
            >
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
        </Menu>
    );
  }
}


export default DLMenu