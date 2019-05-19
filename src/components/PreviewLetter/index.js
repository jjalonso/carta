/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import copy from 'copy-to-clipboard';
import { EditorState } from 'braft-editor';
import {
  Col,
  Row,
  Skeleton,
  Button,
  Icon,
  Divider,
  message,
  Dropdown,
  Menu,
} from 'antd';

import { fetchLetter as fetchLetterApi } from '../../lib/services/api';
import Paper from '../Paper';
import Editor from '../Editor';

import styles from './PreviewLetter.module.css';

const PreviewLetter = ({ assessmentData }) => {
  const [letterMarkup, setLetterMarkup] = useState();
  const [fetching, setFetching] = useState(true);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    async function asyncFetch() {
      setLetterMarkup(await fetchLetterApi(assessmentData));
      setFetching(false);
    }
    asyncFetch();
  }, []);

  const handleEdition = () => setEditMode(!editMode);

  const handleDownload = () => message.error('Pardon me, this feature will arrive soon.');

  const handleCopy = () => {
    const success = copy(letterMarkup.toText());
    if (success) message.success('Copied to clipboard');
    else message.error('We could not copy it.');
  };

  return (
    <Paper className={styles.paper}>
      <Row>
        <Button
          type="primary"
          className={styles.editionButton}
          onClick={handleEdition}
        >
          {editMode
            ? 'Done'
            : (
              <>
                <Icon type="edit" theme="filled" />
                &nbsp;
                Edit
              </>
            )
          }
        </Button>

        <Dropdown
          trigger={['click']}
          overlay={(
            <Menu>
              { document.queryCommandSupported('copy') && (
                <Menu.Item key="0">
                  <Button
                    type="link"
                    onClick={handleCopy}
                  >
                    Copy to clipboard (No format)
                  </Button>
                </Menu.Item>
              )}
              {/* <Menu.Divider /> */}
              <Menu.Item key="2">
                <Button
                  type="link"
                  onClick={handleDownload}
                >
                  Download Word (.doc)
                </Button>
              </Menu.Item>
            </Menu>
          )}
        >

          <Button type="link" size="large">
            Export document
            <Icon type="down" />
          </Button>
        </Dropdown>

        


        {/* { copySuccess && (
          <Alert
            closable
            className={styles.copyAlert}
            message="Letter copied to clipboard!"
            type="success"
            afterClose={handleAlertClose}

          />
        )} */}

        {/* { copySuccess === false && (
          <Alert
            closable
            className={styles.copyAlert}
            message="Oops, we could not copy it."
            type="error"
            afterClose={handleAlertClose}
          />
        )} */}

      </Row>
      <Divider />
      { editMode === false && (
        <Row>
          <Col span={24}>
            <Skeleton
              active
              title={false}
              paragraph={{
                rows: 25,
                width: [
                  '80%', '100%', '100%', '50%', '100%',
                  '50%', '30%', '50%', '40%', '50%',
                  '100%', '100%', '50%', '40%', '50%',
                  '30%', '100%', '60%',
                ],
              }}
              loading={fetching}
            />
            { letterMarkup instanceof EditorState ? <span dangerouslySetInnerHTML={{ __html: letterMarkup.toHTML() }} /> : '' }
          </Col>
        </Row>
      )}

      { editMode && (
        <Editor
          contentClassName={styles.letterEditor}
          value={letterMarkup}
          onChange={setLetterMarkup}
        />
      )}
    </Paper>
  );
};

const mapStateToProps = state => ({
  assessmentData: state.assessment.data,
});

export default connect(
  mapStateToProps,
)(PreviewLetter);
