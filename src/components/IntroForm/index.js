import React from 'react';
import PropTypes from 'prop-types';
import nop from 'nop';
import {
  Row,
  Col,
  Input,
  Form,
  Select,
  DatePicker,
  Radio,
  Tooltip,
} from 'antd';

import TagsSelect from '../TagsSelect';
import TagsInput from '../TagsInput';
import Field from '../Field';

const IntroForm = ({
  titleOptions,
  companionOptions,
  problemsOptions,
  isFetchingMedication,
  medicationData,
  fetchMedication,
  clearMedication,
}) => (
  <Form
    autoComplete="off"
    labelAlign="left"
    colon={false}
  >
    <Row>
      <Col span={24}>
        <Field
          name="title"
          render={(field, error) => (
            <Form.Item
              label="Title *"
              {...error}
            >
              <Select
                placeholder="Select title"
                {...field}
              >
                {titleOptions
                  .map(opt => <Select.Option key={opt} value={opt}>{opt}</Select.Option>)}
              </Select>
            </Form.Item>
          )}
        />
      </Col>
      <Col span={24}>
        <Field
          name="name"
          render={(field, error) => (
            <Form.Item
              label="Patient name"
              {...error}
            >
              <Tooltip
                placement="right"
                title="Your patient doesn&#39;t want to be in Carta. We respect patient confidentiality."
              >
                <Input
                  disabled
                  {...field}
                />
              </Tooltip>
            </Form.Item>
          )}
        />
      </Col>

      <Col span={8}>
        <Field
          name="date"
          render={(field, error) => (
            <Form.Item
              label="Assessment date"
              {...error}
            >
              <DatePicker
                format="DD-MM-YYYY"
                {...field}
              />
            </Form.Item>
          )}
        />
      </Col>

      <Col offset={1} span={15}>
        <Field
          name="place"
          render={(field, error) => (
            <Form.Item
              label="Assessment place"
              {...error}
            >
              <Radio.Group
                {...field}
              >
                <Radio value="clinic">Clinic</Radio>
                <Radio value="home">Home</Radio>
              </Radio.Group>
            </Form.Item>
          )}
        />
      </Col>

      <Col span={24}>
        <Field
          name="companion"
          render={(field, error) => (
            <Form.Item
              label="Assessment companion"
              {...error}
            >
              <TagsSelect
                placeholder="Enter companion..."
                newLabel="Add Companion"
                choices={companionOptions}
                {...field}
              />
            </Form.Item>
          )}
        />
      </Col>

      <Col span={24}>
        <Field
          name="problems"
          render={(field, error) => (
            <Form.Item
              label="Patient problems *"
              {...error}
            >
              <TagsSelect
                placeholder="Enter problems..."
                newLabel="Add Problem"
                choices={problemsOptions}
                {...field}
              />
            </Form.Item>
          )}
        />
      </Col>

      <Col span={24}>
        <Field
          name="conditions"
          render={(field, error) => (
            <Form.Item
              label="Health conditions"
              {...error}
            >
              <TagsInput
                newLabel="Add Condition"
                placeholder="Enter condition..."
                {...field}
              />
            </Form.Item>
          )}
        />
      </Col>

      <Col span={24}>
        <Field
          name="medication"
          render={(field, error) => (
            <Form.Item
              label="Current medication"
              {...error}
            >
              <TagsSelect
                loading={isFetchingMedication}
                placeholder="Search for medication..."
                newLabel="Add Medication"
                onHideInput={clearMedication}
                onSearch={fetchMedication}
                choices={medicationData}
                {...field}
              />
            </Form.Item>
          )}
        />
      </Col>
    </Row>
  </Form>
);

IntroForm.propTypes = {
  titleOptions: PropTypes.arrayOf(PropTypes.string),
  companionOptions: PropTypes.arrayOf(PropTypes.string),
  problemsOptions: PropTypes.arrayOf(PropTypes.string),
  isFetchingMedication: PropTypes.bool,
  medicationData: PropTypes.arrayOf(PropTypes.string),
  fetchMedication: PropTypes.func,
  clearMedication: PropTypes.func,
};

IntroForm.defaultProps = {
  titleOptions: [],
  companionOptions: [],
  problemsOptions: [],
  isFetchingMedication: false,
  medicationData: [],
  fetchMedication: nop,
  clearMedication: nop,
};

export default IntroForm;
