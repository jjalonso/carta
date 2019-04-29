import React from 'react';
import {
  Col,
  Row,
  Form,
  Select,
  InputNumber,
  Checkbox,
  Input,
} from 'antd';

import styles from './BackgroundForm.module.css';
import TagsSelect from '../TagsSelect';
import Editor from '../Editor';
import Field from '../Field';

const BackgroundForm = ({
  countriesArray,
  yearsArray,
  childrenArray,
  values,
}) => (
  <Form
    autoComplete="off"
    labelAlign="left"
    colon={false}
  >
    <Row>
      <Col span={16}>
        <Field
          name="country"
          render={(field, error) => (
            <Form.Item
              label="Country of birth"
              {...error}
            >
              <Select
                showSearch
                placeholder="Select country"
                {...field}
              >
                {countriesArray.map(name => <Select.Option key={name}>{name}</Select.Option>)}
              </Select>
            </Form.Item>
          )}
        />
      </Col>

      <Col offset={1} span={7}>
        <Field
          name="emigrationYear"
          render={(field, error) => (
            <Form.Item
              label="Emigration year"
              {...error}
            >
              <Select
                placeholder="Select year"
                disabled={!values.country || values.country === 'United Kingdom'}
                {...field}
              >
                { yearsArray.map(num => <Select.Option key={num} value={num}>{num}</Select.Option>) }
              </Select>
            </Form.Item>
          )}
        />
      </Col>

      <Col span={24}>
        <Field
          name="occupation"
          render={(field, error) => (
            <Form.Item
              label="Occupation"
              {...error}
            >
              <Input
                placeholder="Enter occupation"
                {...field}
              />
            </Form.Item>
          )}
        />
      </Col>

      <Col span={24}>
        <Field
          name="degree"
          render={(field, error) => (
            <Form.Item
              label="Academic degree"
              {...error}
            >
              <Input
                placeholder="Enter degree name if any"
                {...field}
              />
            </Form.Item>
          )}
        />
      </Col>

      <Col span={10}>
        <Field
          name="isDegreeIncompleted"
          render={(field, error) => (
            <Form.Item
              label="Studies status"
              {...error}
            >
              <Checkbox
                disabled={!values.degree}
                {...field}
                checked={field.value}
              >
                Degree incompleted
              </Checkbox>
            </Form.Item>
          )}
        />
      </Col>

      <Col offset={1} span={7}>
        <Field
          name="totalChildren"
          render={(field, error) => (
            <Form.Item
              colon={false}
              label="Children"
              {...error}
            >
              <Select
                placeholder="Select amount"
                {...field}
              >
                { childrenArray.map(num => <Select.Option key={num} value={num}>{num}</Select.Option>) }
              </Select>
            </Form.Item>
          )}
        />
      </Col>

      <Col span={24}>
        <Field
          name="living"
          render={(field, error) => (
            <Form.Item
              label="Living with"
              extra="Empty if patient live alone"
              {...error}
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
                {...field}
              />
            </Form.Item>
          )}
        />
      </Col>

      <Col span={24}>
        <Field
          name="other"
          render={(field, error) => (
            <Form.Item
              colon={false}
              label="Other information"
              {...error}
            >
              <Editor
                placeholder="Describe patient ADL, eyesight, mobility and consumtion habits."
                {...field}
              />
            </Form.Item>
          )}
        />
      </Col>

    </Row>
  </Form>
);

export default BackgroundForm;
