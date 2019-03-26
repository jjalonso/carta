import React from 'react';
import {
  Row,
  Col,
  Form,
} from 'antd';

import TagsInput from '../TagsInput';
import TagsSelect from '../TagsSelect';
import styles from './MedicalForm.module.css';
import MedicationWidget from '../MedicationWidget';
import FieldHelp from '../FieldHelp';

const MedicalForm = ({
  fields,
  fieldsState,
}) => (
  <Form
    labelAlign="left"
    colon={false}
  >
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
            label="Patient problems"
            {...fieldsState.problems}
          >
            <Col span={7}>
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
        <img className={styles.sideImage} alt="Medical form" src="/images/medical-form-side.png" />
      </Col>
    </Row>
  </Form>
);


MedicalForm.propTypes = {
  // TODO: state
  // TODO: fieldsState
};

export default MedicalForm;
