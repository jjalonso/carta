import React, { useState } from 'react';
import debounce from 'debounce';
import {
  Row,
  Col,
  Form,
  Select,
  Spin,
  Empty,
} from 'antd';

import styles from './MedicalForm.module.css';
import { useFormPropType } from '../../hooks/useForm';


const MedicalForm = ({
  conditions,
  problems,
  medication,
}) => {
  const [medicationData, setMedicationData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const onBlur = () => {
    setMedicationData([]);
  };

  const fetchMedication = debounce((query) => {
    setIsFetching(true);
    fetch(
      `https://openprescribing.net/api/1.0/bnf_code/?format=json&q=${query}`,
    )
      .then(res => res.json())
      .then((json) => {
        setIsFetching(false);
        setMedicationData(
          json
            .filter(med => med.type === 'product format')
            .slice(0, 50)
            .map(med => ({ id: med.id, name: med.name.replace(/_/g, ' ') })),
        );
      });
  }, 500);

  return (
    <>
      <Row>
        <Col span={12}>

          <Col span={24}>
            <Form.Item label="Health Conditions">
              <Select
                mode="tags"
                placeholder="Enter health conditions"
                {...conditions}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Presenting Problems">
              <Select
                mode="tags"
                placeholder="Select or create patient problems"
                {...problems}
              >
                <Select.Option value="forgeting medication">Forgeting medication</Select.Option>
                <Select.Option value="forgeting to eat">Forgeting to eat</Select.Option>
                <Select.Option value="getting confuse">Getting confuse</Select.Option>
                <Select.Option value="getting muddled with Days/Dates">Getting muddled with Days/Dates</Select.Option>
                <Select.Option value="forgetful conversations">Forgetful conversations</Select.Option>
                <Select.Option value="poor short-term memory">Poor short-term memory</Select.Option>
                <Select.Option value="unable to retain information">Unable to retain information</Select.Option>
                <Select.Option value="cooking issues">Cooking issues</Select.Option>
                <Select.Option value="loosing items">Loosing items</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Current Medication">
              <Select
                mode="multiple"
                // labelInValue
                filterOption={false}
                placeholder="Search by medicament name"
                notFoundContent={isFetching ? <Spin className={styles.medicationSpin} size="small" /> : <Empty />}
                onSearch={fetchMedication}
                onBlur={onBlur}
                {...medication}
              >
                {medicationData.map(med => <Select.Option key={med.id}>{med.name}</Select.Option>)}
              </Select>
            </Form.Item>
          </Col>
        </Col>

        <Col offset={1} span={11} className={styles.imageContainer}>
          <img className={styles.sideImage} alt="Medical form" src="/images/medical-form-side.png" />
        </Col>
      </Row>
    </>
  );
};

MedicalForm.propTypes = {
  problems: useFormPropType.isRequired,
  conditions: useFormPropType.isRequired,
  medication: useFormPropType.isRequired,
};

export default MedicalForm;
