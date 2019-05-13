import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Form,
  Select,
  Checkbox,
  Input,
} from 'antd';

import TagsSelect from '../TagsSelect';
import Editor from '../Editor';
import Field from '../Field';

const BackgroundForm = ({
  countriesOptions,
  emigrationYearsOptions,
  childrenOptions,
  smokingOptions,
  alcoholOptions,
  livingOptions,
  // eslint-disable-next-line react/prop-types
  values,
}) => (
  <Form
    autoComplete="off"
    colon={false}
  >
    <Row>
      <Col span={16}>
        <Field
          name="country"
          render={(field, error) => (
            <Form.Item
              label="Country of birth *"
              {...error}
            >
              <Select
                showSearch
                placeholder="Select country"
                {...field}
              >
                {countriesOptions.map(name => <Select.Option key={name}>{name}</Select.Option>)}
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
              label={`Emigration year ${!values.country || values.country === 'UnitedKingdom' ? '' : '*'}`}
              {...error}
            >
              <Select
                placeholder="Year"
                disabled={!values.country || values.country === 'United Kingdom'}
                {...field}
              >
                {emigrationYearsOptions
                  .map(num => <Select.Option key={num} value={num}>{num}</Select.Option>)}
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
              label="Occupation *"
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

      <Col span={11}>
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
                choices={livingOptions}
                {...field}
              />
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
              <Select
                placeholder="Number"
                {...field}
              >
                {childrenOptions
                  .map(num => <Select.Option key={num} value={num}>{num}</Select.Option>)}
              </Select>
            </Form.Item>
          )}
        />
      </Col>

      <Col offset={1} span={8}>
        <Field
          name="smoking"
          render={(field, error) => (
            <Form.Item
              colon={false}
              label="Smoking"
              {...error}
            >
              <Select
                placeholder="Select"
                {...field}
              >
                {smokingOptions
                  .map(num => <Select.Option key={num} value={num}>{num}</Select.Option>)}
              </Select>
            </Form.Item>
          )}
        />
      </Col>
      <Col offset={1} span={8}>
        <Field
          name="alcohol"
          render={(field, error) => (
            <Form.Item
              colon={false}
              label="Alcohol"
              {...error}
            >
              <Select
                placeholder="Select"
                {...field}
              >
                {alcoholOptions
                  .map(num => <Select.Option key={num} value={num}>{num}</Select.Option>)}
              </Select>
            </Form.Item>
          )}
        />
      </Col>
    </Row>

    <Col span={24}>
      <Field
        name="other"
        render={(field, error) => (
          <Form.Item
            colon={false}
            label="Other information *"
            {...error}
          >
            <Editor
              placeholder="Describe patient ADL, eyesight, mobility..."
              {...field}
            />
          </Form.Item>
        )}
      />
    </Col>
  </Form>
);

BackgroundForm.propTypes = {
  countriesOptions: PropTypes.arrayOf(PropTypes.string),
  emigrationYearsOptions: PropTypes.arrayOf(PropTypes.number),
  childrenOptions: PropTypes.arrayOf(PropTypes.string),
  smokingOptions: PropTypes.arrayOf(PropTypes.string),
  alcoholOptions: PropTypes.arrayOf(PropTypes.string),
  livingOptions: PropTypes.arrayOf(PropTypes.string),
};

BackgroundForm.defaultProps = {
  countriesOptions: [],
  emigrationYearsOptions: [],
  childrenOptions: [],
  smokingOptions: [],
  alcoholOptions: [],
  livingOptions: [],
};

export default BackgroundForm;
