import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';
import { Link } from 'react-router-dom';
import './signin.scss';

export default function SignIn(): JSX.Element {
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
        open={true}
        title="Добро пожаловать"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            className="signin__button"
            type="primary"
            block
            loading={loading}
            onClick={handleOk}
          >
            <p>Войти</p>
          </Button>,
        ]}
      >
        <p>
          В первый раз здесь?{' '}
          <Link className="signin__link" to="/signup">
            Зарегистрируйтесь
          </Link>
        </p>

        <Input className="signin__input" placeholder="Введите email" size="large" />
        <Input.Password className="signin__input" placeholder="Введите пароль" size="large" />
      </Modal>
    </>
  );
}
