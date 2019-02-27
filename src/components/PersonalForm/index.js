import React from 'react';
import worldCountries from 'world-countries';
import moment from 'moment';

import {
  Row,
  Col,
  Form,
  Select,
  Checkbox,
  Input,
  InputNumber,
} from 'antd';

import styles from './PersonalForm.module.css';
import { useFormPropType } from '../../hooks/useForm';
import SimpleEditor from '../SimpleEditor';

const countries = worldCountries
  .map(country => country.name.common)
  .sort();

const PersonalForm = ({
  country,
  emigrationYear,
  degree,
  isDegreeIncompleted,
  living,
  totalChildren,
  activities,
}) => {
  const maxEmigrationYear = moment().year();
  const minEmigrationYear = maxEmigrationYear - 100;

  return (
    <>
      <Row>
        <Col span={12}>

          <Col span={12}>
            <Form.Item label="Birth Country">
              <Select
                showSearch
                placeholder="Select country"
                {...country}
              >
                {countries.map(name => <Select.Option key={name}>{name}</Select.Option>)}
              </Select>
            </Form.Item>
          </Col>

          <Col offset={2} span={10}>
            <Form.Item label="Emigration year">
              <InputNumber
                className={styles.children}
                disabled={country.value === 'United Kingdom' || !country.value}
                min={minEmigrationYear}
                max={maxEmigrationYear}
                {...emigrationYear}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Studies">
              <Input
                placeholder="Enter degree name"
                {...degree}
              />
            </Form.Item>
          </Col>

          <Col offset={2} span={10}>
            <Form.Item label="Studies status">
              <Checkbox
                disabled={!degree.value}
                {...isDegreeIncompleted}
              >
                Degree incompleted
              </Checkbox>
            </Form.Item>
          </Col>

          <Col span={15}>
            <Form.Item label="Living with">
              <Select
                mode="multiple"
                placeholder="Select members"
                {...living}
              >
                <Select.Option value="husband">Husband</Select.Option>
                <Select.Option value="wife">Wife</Select.Option>
                <Select.Option value="partner">Partner</Select.Option>
                <Select.Option value="children">Children</Select.Option>
                <Select.Option value="parent">Parent</Select.Option>
                <Select.Option value="friend">Friend</Select.Option>
                <Select.Option value="family">Family</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col offset={2} span={7}>
            <Form.Item label="Total children">
              <InputNumber
                className={styles.children}
                min={0}
                max={100}
                {...totalChildren}
              />
            </Form.Item>
          </Col>

        </Col>

        <Col offset={1} span={11}>
          <Form.Item label="Activities">
            <SimpleEditor
              contentClassName={styles.activities}
              placeholder="Describe patient activities"
              {...activities}
            />
          </Form.Item>
        </Col>
      </Row>

    </>
  );
};

PersonalForm.propTypes = {
  country: useFormPropType.isRequired,
  emigrationYear: useFormPropType.isRequired,
  degree: useFormPropType.isRequired,
  isDegreeIncompleted: useFormPropType.isRequired,
  living: useFormPropType.isRequired,
  totalChildren: useFormPropType.isRequired,
  activities: useFormPropType.isRequired,
};

export default PersonalForm;
