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
  minEmigrationYear,
  maxEmigrationYear,
  countries,
  values,
}) => (
  <Form
    autoComplete="off"
    labelAlign="left"
    colon={false}
  >
    <Row>
      <Col span={12}>
        <Row>
          <Col span={12}>
            <Field
              name="country"
              render={(field, error) => (
                <Form.Item
                  label="Birth country"
                  {...error}
                >
                  <Select
                    showSearch
                    placeholder="Select country"
                    {...field}
                  >
                    {countries.map(name => <Select.Option key={name}>{name}</Select.Option>)}
                  </Select>
                </Form.Item>
              )}
            />
          </Col>

          <Col offset={1} span={11}>
            <Field
              name="emigrationYear"
              render={(field, error) => (
                <Form.Item
                  label="Emigration year"
                  {...error}
                >
                  <InputNumber
                    disabled={!values.country || values.country === 'United Kingdom'}
                    {...field}
                  />
                </Form.Item>
              )}
            />
          </Col>
        </Row>
        
        <Row>
          <Col span={12}>
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

          <Col offset={1} span={11}>
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
        </Row>
        
        <Row>
          <Col span={6}>
            <Field
              name="totalChildren"
              render={(field, error) => (
                <Form.Item
                  colon={false}
                  label="Children"
                  {...error}
                >
                  <InputNumber
                    {...field}
                  />
                </Form.Item>
              )}
            />
          </Col>
          <Col offset={1} span={14}>
            <Field
              name="living"
              render={(field, error) => (
                <Form.Item
                  label="Living with"
                  extra="Leave it empty if patient live alone"
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

        </Row>
        
      </Col>

      <Col offset={1} span={11}>
        <Field
          name="activities"
          render={(field, error) => (
            <Form.Item
              colon={false}
              label="Activities"
              {...error}
            >
              <Editor
                contentClassName={styles.activities}
                placeholder="Describe patient activities"
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
