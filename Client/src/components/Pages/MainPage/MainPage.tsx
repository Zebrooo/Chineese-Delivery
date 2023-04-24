import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
const { Content } = Layout;
import { Button, Space } from 'antd';
// import OneItem from '../UI/OneItem';

export default function MainPage(): JSX.Element {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            display: 'flex',
            justifyContent: 'center',
            color: 'white',
            backgroundImage: 'url("https://wallpaperaccess.com/full/709498.jpg")',
          }}
        >
          <Space
            direction="vertical"
            style={{
              width: '20%',
              justifyContent: 'center',
              alignItems: 'end',
              //   marginLeft: "35%",
              marginTop: '15%',
            }}
          >
            <Button block style={{ height: '40px' }}>
              ЗАКАЗАТЬ СВОЮ ПАРУ
            </Button>
          </Space>
        </div>
      </Content>
      <div
        style={{
          display: 'flex',
          //   justifyContent: "center",
          flexWrap: 'wrap',
          padding: ' 0px 50px',
        }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Кроссовки</Breadcrumb.Item>
          <Breadcrumb.Item>Мужские</Breadcrumb.Item>
          <Breadcrumb.Item>Reebok</Breadcrumb.Item>
        </Breadcrumb>

        <Content
          className="site-layout"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2vh',
          }}
        >
          {/* <OneItem />
          <OneItem />
          <OneItem />
          <OneItem />
          <OneItem />
          <OneItem />
          <OneItem />
          <OneItem /> */}
        </Content>
      </div>
    </Layout>
  );
}
