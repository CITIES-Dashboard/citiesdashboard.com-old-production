// disable eslint for this file
/* eslint-disable */

import { Box, Button } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import * as Tracking from '../../Utils/Tracking';

// Download button: download raw dataset

export function DatasetDownloadButton({ project }) {
    const isDisabled = project.sheetId == null ? true : false;
    return (
        <Button
            onClick={() => {
                Tracking.sendEventAnalytics(Tracking.Events.getDataset);
            }}
            href={isDisabled
                ? ''
                : `https://docs.google.com/spreadsheets/d/${project.sheetId}`}
            target="_blank"
            rel="noreferrer"
            disabled={isDisabled} variant="contained">
            <LinkIcon />
            &nbsp;
            {isDisabled ? 'COMING SOON' : 'FULL DATASET'}
        </Button>
    );
}
