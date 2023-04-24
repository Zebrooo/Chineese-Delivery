import React, { useState } from 'react';
import { Button, Select } from 'antd';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#B9242C',
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export default function OneItem(): JSX.Element {
  return (
    <>
      <div
        style={{
          height: '50vh',
          width: '31vh',
          borderRadius: '10px',
          marginTop: '5vh',
        }}
      >
        <Carousel dotPosition="bottom">
          <div>
            <img
              src="https://ir.ozone.ru/s3/multimedia-1/wc1000/6450584209.jpg"
              alt=""
              style={{
                height: '38vh',
                width: '30vh',
                borderRadius: '10px',
                justifyContent: 'center',
              }}
            />
          </div>
          <div>
            <img
              src="https://ir.ozone.ru/s3/multimedia-z/wc1000/6450584279.jpg"
              alt=""
              style={{
                height: '38vh',
                width: '30vh',
                borderRadius: '10px',
                justifyContent: 'center',
              }}
            />
          </div>
          <div>
            <img
              src="https://ir.ozone.ru/s3/multimedia-e/wc1000/6450584222.jpg"
              alt=""
              style={{
                height: '38vh',
                width: '30vh',
                borderRadius: '10px',
                justifyContent: 'center',
              }}
            />
          </div>
        </Carousel>
        <h5 style={{ marginTop: '5px', color: '#B9242C' }}>Reebok Classic</h5>
        <p>
          Reebok Classic Leather - это один из тех кроссовок, в которых люди одобрительно кивают в
          ответ на одно упоминание названия
        </p>
        <Select
          defaultValue="Размер"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: '36', label: '36' },
            { value: '37', label: '37' },
            { value: '38', label: '38' },
            { value: '39', label: '39' },
            { value: '40', label: '40' },
            { value: '41', label: '41' },
            { value: '42', label: '42' },
            { value: '43', label: '43' },
            { value: '44', label: '44' },
            { value: '45', label: '45' },
            { value: '46', label: '46' },
            { value: '47', label: '47' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
        <Button size="middle">Добавить в корзину</Button>
      </div>
    </>
  );
}
