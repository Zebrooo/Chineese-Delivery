import React from 'react';
import { Breadcrumb, Layout, Menu, theme, ConfigProvider, Avatar, Badge } from 'antd';
import { Col, Row } from 'antd';
import { LogoutOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
// import SignIn from './SignIn';

const { Header, Content, Footer } = Layout;

export default function AppNavbar(): JSX.Element {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryBg: 'white',
          //   wireframe: false,
          colorPrimary: '#B9242C',
        },
      }}
    >
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'space-around',
        }}
      >
        <Menu.ItemGroup>
          <Menu.Item key="feedback">Отзывы</Menu.Item>
          <Menu.Item key="catalog">Каталог</Menu.Item>
          <Menu.Item key="customOrder">Индивидуальный заказ</Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '30%',
          }}
        >
          <Menu.Item key="shopName">
            <span
              style={{
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '30px',
                lineHeight: '25px',
                color: '#000',
              }}
            >
              <h2 style={{ fontWeight: 'bold', color: '#B9242C' }}>ДИМА КИТАЕЦ ★</h2>
            </span>
          </Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup>
          <Menu.Item key="signIn">
            <Link to="/signin">Войти</Link>
          </Menu.Item>
          <Link to="/profile">
            <Avatar style={{ backgroundColor: '#B9242C' }} icon={<UserOutlined />} />
          </Link>
          <Menu.Item key="logout">
            <LogoutOutlined style={{ fontSize: '20px' }} />
          </Menu.Item>

          <Menu.Item key="shoppingCart">
            <Badge count={5} size="small" offset={[6, 0]} style={{ backgroundColor: '#B9242C' }}>
              <ShoppingOutlined style={{ fontSize: '23px' }} />
            </Badge>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </ConfigProvider>
  );
}
