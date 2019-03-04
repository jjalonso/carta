import React from 'react';
import {
  Row,
  Col,
  Input,
  Form,
  Select,
  DatePicker,
  Radio,
} from 'antd';

import styles from './IntroForm.module.css';
import { useFormPropType } from '../../hooks/useForm';
import CompanyWidget from '../CompanyWidget';


const IntroForm = ({
  title,
  name,
  date,
  company,
  place,
}) => (
  <>
    <Row>
      <Col span={10}>
        <Form.Item label="Patient">
          <Input.Group compact>
            <Select
              className={styles.title}
              placeholder="Title"
              {...title}
            >
              <Select.Option value="Miss">Miss</Select.Option>
              <Select.Option value="Mrs">Mrs</Select.Option>
              <Select.Option value="Ms">Ms</Select.Option>
              <Select.Option value="Mr">Mr</Select.Option>
            </Select>
            <Input
              className={styles.name}
              placeholder="Patient Name"
              {...name}
            />
          </Input.Group>
        </Form.Item>
      </Col>

      <Col span={5}>
        <Form.Item label="Assessment Date">
          <DatePicker
            className={styles.date}
            format="DD-MM-YYYY"
            {...date}
          />
        </Form.Item>
      </Col>

      <Col offset={1} span={8}>
        <Form.Item label="Assessment Place">
          <Radio.Group {...place}>
            <Radio value="clinic">Clinic</Radio>
            <Radio value="home">Home</Radio>
          </Radio.Group>
        </Form.Item>
      </Col>
    </Row>

    <Row>
      <Col span={12}>
        <Form.Item label="Assessment Company">
          <CompanyWidget
            {...company}
          />
        </Form.Item>
      </Col>
    </Row>
  </>
);

IntroForm.propTypes = {
  title: useFormPropType.isRequired,
  name: useFormPropType.isRequired,
  date: useFormPropType.isRequired,
  place: useFormPropType.isRequired,
  company: useFormPropType.isRequired,
};

export default IntroForm;
