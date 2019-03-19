import React from 'react';
import worldCountries from 'world-countries';
import PropTypes from 'prop-types';

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
import Editor from '../Editor';
import TagsSelect from '../TagsSelect';

const countries = worldCountries
  .map(country => country.name.common)
  .sort();

const PersonalForm = ({
  fields,
  fieldsState,
  maxEmigrationYear,
  minEmigrationYear,
  isEmigrationYearDisabled,
  isDegreeIncompletedDisabled,
}) => (
  <Form
    labelAlign="left"
    colon={false}
  >
    <Row>
      <Col span={12}>

        <Col span={14}>
          <Form.Item
            label="Birth country"
            {...fieldsState.country}
          >
            <Select
              showSearch
              placeholder="Select country"
              {...fields.country}
            >
              {countries.map(name => <Select.Option key={name}>{name}</Select.Option>)}
            </Select>
          </Form.Item>
        </Col>

        <Col offset={2} span={6}>
          <Form.Item
            label="Emigration year"
            {...fieldsState.emigrationYear}
          >
            <InputNumber
              className={styles.children}
              disabled={isEmigrationYearDisabled}
              min={minEmigrationYear}
              max={maxEmigrationYear}
              {...fields.emigrationYear}
            />
          </Form.Item>
        </Col>

        <Col span={14}>
          <Form.Item
            label="Academic degree"
            {...fieldsState.degree}
          >
            <Input
              placeholder="Enter degree name"
              {...fields.degree}
            />
          </Form.Item>
        </Col>

        <Col offset={2} span={8}>
          <Form.Item
            label="Studies status"
            {...fieldsState.isDegreeIncompleted}
          >
            <Checkbox
              disabled={isDegreeIncompletedDisabled}
              {...fields.isDegreeIncompleted}
            >
              Degree incompleted
            </Checkbox>
          </Form.Item>
        </Col>

        <Col span={14}>
          <Form.Item
            label="Living with"
            {...fieldsState.living}
          >

            <TagsSelect
              placeholder="Enter a member..."
              newLabel="Add Member"
              choices={[
                'Husband',
                'Wife',
                'Partner',
                'Children',
                'Friend',
                'Parent',
                'Family',
              ]}
              {...fields.living}
            />
          </Form.Item>
        </Col>

        <Col offset={2} span={6}>
          <Form.Item
            colon={false}
            label="Children"
            {...fieldsState.totalChildren}
          >
            <InputNumber
              className={styles.children}
              min={0}
              max={100}
              {...fields.totalChildren}
            />
          </Form.Item>
        </Col>

      </Col>

      <Col offset={1} span={11}>
        <Form.Item
          colon={false}
          label="Activities"
          {...fieldsState.activities}
        >
          <Editor
            contentClassName={styles.activities}
            placeholder="Describe patient activities"
            {...fields.activities}
          />
        </Form.Item>
      </Col>
    </Row>

  </Form>
);

PersonalForm.propTypes = {
  // TODO: state
  // TODO: fieldsState
  maxEmigrationYear: PropTypes.number.isRequired,
  minEmigrationYear: PropTypes.number.isRequired,
  isEmigrationYearDisabled: PropTypes.bool.isRequired,
  isDegreeIncompletedDisabled: PropTypes.bool.isRequired,
};


export default PersonalForm;
