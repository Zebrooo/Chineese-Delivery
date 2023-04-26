import React, { useState } from 'react';
import { Button, Modal, Input, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';
import './signup.scss';
import { GoogleOutlined } from '@ant-design/icons';

export default function SignUp(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        className="test"
        open={true}
        title="Добро пожаловать"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#b9242c',
              },
            }}
          >
            <div className="signup__div_button">
              <Button
                className="signup__button"
                type="primary"
                block
                key="link"
                href="http://localhost:3000/signin"
                loading={loading}
                onClick={handleOk}
              >
                <p>Войти</p>
              </Button>
            </div>
          </ConfigProvider>,
        ]}
      >
        <p>
          Уже есть аккаунт?{' '}
          <Link className="signup__link" to="/signup">
            Войдите
          </Link>
        </p>
        <br />
        <Input className="signup__input" placeholder="Введите свое имя" size="large" />
        <br />
        <Input className="signup__input" placeholder="Введите свой email" size="large" />
        <br />
        <Input className="signup__input" placeholder="Телефон" size="large" />
        <br />
        <Input.Password className="signup__input" placeholder="Придумайте пароль" size="large" />
        <div className="signup__logo_div">
          Войти через
          <GoogleOutlined className="signup__logo" />
          oogle
        </div>
      </Modal>
    </>
  );
}
