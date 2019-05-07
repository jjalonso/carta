/* eslint-disable react/no-danger */
import React, { useState, useEffect, useContext } from 'react';
import copy from 'copy-to-clipboard';
import { EditorState } from 'braft-editor';
import {
  Col,
  Row,
  Skeleton,
  Button,
  Icon,
  Alert,
} from 'antd';

import { fetchLetter as fetchLetterApi } from '../../lib/services/api';
import { AppContext } from '../../components/App';
import Paper from '../../components/Paper/Paper';
import styles from './PreviewLetter.module.css';
import Editor from '../../components/Editor';

const PreviewLetter = () => {
  const { appState } = useContext(AppContext);
  const [letterMarkup, setLetterMarkup] = useState();
  const [fetching, setFetching] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [copySuccess, setCopySuccess] = useState();

  useEffect(() => {
    async function asyncFetch() {
      setLetterMarkup(await fetchLetterApi(appState.assessment));
      setFetching(false);
    }
    asyncFetch();
  }, [appState.assessment]);

  const handleAlertClose = () => {
    setCopySuccess(null);
  };

  const handleEdition = () => setEditMode(!editMode);

  const handleCopy = () => {
    // const plainString = letterMarkup.toHTML().replace(/<\/?[^>]+(>|$)/g, '');
    const success = copy(letterMarkup.toText());
    if (success) setCopySuccess(true);
    else setCopySuccess(false);
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
            ? (
              <>
                <Icon type="left" />
                &nbsp;
                Finish
              </>
            )
            : (
              <>
                <Icon type="edit" />
                &nbsp;
                Edit
              </>
            )
          }
        </Button>

        { document.queryCommandSupported('copy') && (
          <Button
            onClick={handleCopy}
          >
            <Icon type="paper-clip" />
            Copy to clipboard
          </Button>
        )}

        { copySuccess && (
          <Alert
            closable
            className={styles.copyAlert}
            message="Letter copied to clipboard!"
            type="success"
            afterClose={handleAlertClose}

          />
        )}

        { copySuccess === false && (
          <Alert
            closable
            className={styles.copyAlert}
            message="Oops, we could not copy it."
            type="error"
            afterClose={handleAlertClose}
          />
        )}

      </Row>

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

export default PreviewLetter;
