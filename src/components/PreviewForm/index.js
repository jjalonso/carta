import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Form,
  Typography,
} from 'antd';

import LetterTitle from '../LetterTitle';

const PreviewForm = ({
  letterMarkup
}) => (
  <Form
    autoComplete="off"
    labelAlign="left"
    colon={false}
  >
    <Row>
      <Col span={24}>
        <span dangerouslySetInnerHTML={{ __html: letterMarkup }} />
        {/* <Typography.Paragraph>{thankyou}</Typography.Paragraph>
        <Typography.Paragraph>
          {companion}
          &nbsp;
          {consent}
        </Typography.Paragraph>

        <LetterTitle>
          Presenting Problem
        </LetterTitle>
        <Typography.Paragraph>{problems}</Typography.Paragraph>

        <LetterTitle>
          Relevant medical and psychiatric history
        </LetterTitle>
        <Typography.Paragraph>
          <ul>
            { conditions.map(item => <li key={item}>{item}</li>) }
          </ul>
        </Typography.Paragraph>

        <LetterTitle>
          Medication
        </LetterTitle>
        <Typography.Paragraph>
          <ul>
            { medication.map(item => <li key={item}>{item}</li>) }
          </ul>
        </Typography.Paragraph>

        <LetterTitle>
          Mental State Examination
        </LetterTitle>
        <Typography.Paragraph>
          <span dangerouslySetInnerHTML={{ __html: examination }} />
        </Typography.Paragraph>

        <LetterTitle>
          Cognitive Assessment
        </LetterTitle>
        <Typography.Paragraph>
          <span dangerouslySetInnerHTML={{ __html: cognitive }} />
        </Typography.Paragraph>

        <LetterTitle>
          Risk assessment
        </LetterTitle>
        <Typography.Paragraph>{risks}</Typography.Paragraph>


        <LetterTitle>
          Impression
        </LetterTitle>
        <Typography.Paragraph>
          <span dangerouslySetInnerHTML={{ __html: impression }} />
        </Typography.Paragraph>


        <LetterTitle>
          Care plan
        </LetterTitle>
        <Typography.Paragraph>
          <span dangerouslySetInnerHTML={{ __html: carePlan }} />
        </Typography.Paragraph> */}

      </Col>
    </Row>
  </Form>
);

PreviewForm.propTypes = {
  letterMarkup: PropTypes.string,
};

PreviewForm.defaultProps = {
  letterMarkup: '',
};

export default PreviewForm;
