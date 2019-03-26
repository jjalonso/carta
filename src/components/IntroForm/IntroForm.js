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

import CompanionWidget from '../CompanionWidget';
import styles from './IntroForm.module.css';
import FieldHelp from '../FieldHelp';
import TagsSelect from '../TagsSelect';
import MedicationWidget from '../MedicationWidget';
import TagsInput from '../TagsInput';

const IntroForm = ({
  fieldsState,
  fields,
}) => (
  <Form
    labelAlign="left"
    colon={false}
  >
    <Row>
      <Col span={4}>
        <Form.Item
          label="Title"
          {...fieldsState.title}
        >
          <Select
            className={styles.title}
            placeholder="Title"
            {...fields.title}
          >
            <Select.Option value="Miss">Miss</Select.Option>
            <Select.Option value="Mrs">Mrs</Select.Option>
            <Select.Option value="Ms">Ms</Select.Option>
            <Select.Option value="Mr">Mr</Select.Option>
          </Select>
        </Form.Item>
      </Col>
      <Col offset={1} span={8}>
        <Form.Item
          label="Name"
          {...fieldsState.name}
        >
          <Input
            className={styles.name}
            placeholder="Patient name"
            {...fields.name}
          />
        </Form.Item>
      </Col>

      <Col offset={1} span={10}>
        <Form.Item
          labelCol={{ span: 10 }}
          className={styles.formItem}
          label="Assessment companion"
          {...fieldsState.companion}
        >
          <Col span={12}>
            <FieldHelp text="You can select a companion from the list or create a new one" />
          </Col>

          <CompanionWidget
            name="companion"
            {...fields.companion}
          />
        </Form.Item>
      </Col>

    </Row>

    <Row>
      <Col span={5}>
        <Form.Item
          label="Assessment date"
          {...fieldsState.date}
        >
          <DatePicker
            name="date"
            className={styles.date}
            format="DD-MM-YYYY"
            {...fields.date}
          />
        </Form.Item>
      </Col>

      <Col offset={1} span={6}>
        <Form.Item
          label="Assessment place"
          {...fieldsState.place}
        >
          <Radio.Group
            {...fields.place}
          >
            <Radio value="clinic">Clinic</Radio>
            <Radio value="home">Home</Radio>
          </Radio.Group>
        </Form.Item>
      </Col>
    </Row>

    <Row>
      <Col span={12}>

        <Col span={24}>
          <Form.Item
            label="Health conditions"
            {...fieldsState.conditions}
          >
            <TagsInput
              placeholder="Enter condition..."
              newLabel="Add Condition"
              {...fields.conditions}
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            labelCol={{ span: 7 }}
            label="Current medication"
            {...fieldsState.medication}
          >
            <Col span={17}>
              <FieldHelp text="You can search for a medication or create a new one" />
            </Col>
            <MedicationWidget
              {...fields.medication}
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            labelCol={{ span: 6 }}
            label="Patient problems"
            {...fieldsState.problems}
          >
            <Col span={17}>
              <FieldHelp text="You can select a problem from the list or create a new one" />
            </Col>
            <TagsSelect
              placeholder="Enter problems..."
              newLabel="Add Problem"
              choices={[
                'Forgeting medication',
                'Forgeting to eat',
                'Getting confuse',
                'Getting muddled with Days/Dates',
                'Forgetful conversations',
                'Poor short-term memory',
                'Unable to retain information',
                'Cooking issues',
                'Loosing items',
              ]}
              {...fields.problems}
            />
          </Form.Item>
        </Col>
      </Col>

      <Col offset={1} span={11} className={styles.imageContainer}>
        <img className={styles.sideImage} alt="Medical form" src="/images/1.png" />
      </Col>
    </Row>

  </Form>
);

IntroForm.propTypes = {
  // TODO: state
  // TODO: fieldsState
};

export default IntroForm;
