// disable eslint for this file
/* eslint-disable */

import { useState } from 'react';
import { styled } from '@mui/material/styles';

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import * as Tracking from '../../Utils/Tracking';

// import ReactGA from 'react-ga4';

const StyledAccordion = styled(MuiAccordion)(({ theme, expanded }) => ({
    color: theme.palette.text.secondary,
    backgroundImage: 'none',
    backgroundColor: expanded ? theme.palette.background.default : 'transparent',
    boxShadow: expanded ? theme.shadows : 'none',
    transition: theme.transitions,
}));

const StyledAccordionSummary = styled(MuiAccordionSummary)(({ theme, expanded }) => ({
    marginTop: expanded ? theme.spacing(3) : 0,
    flexDirection: 'row-reverse',
    paddingLeft: expanded ? theme.spacing(1) : 0,
    '& .MuiTypography-root': {
        color: theme.palette.text.primary,
        textDecoration: 'underline',
        transition: theme.transitions,
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
}));

const ExpandableSection = ({ title, content }) => {
    const [expanded, setExpanded] = useState(undefined);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : undefined);

        Tracking.sendEventAnalytics(isExpanded ? Tracking.Events.expandSampleData : Tracking.Events.collapseSampleData);
    };

    return (
        <Box>
            <StyledAccordion
                expanded={expanded === "panel1"}
                onChange={handleAccordionChange("panel1")}
            >
                <StyledAccordionSummary expanded={expanded} expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography component="a" variant="body1">
                        {title}
                    </Typography>
                </StyledAccordionSummary>
                <MuiAccordionDetails>
                    {content}
                </MuiAccordionDetails>
            </StyledAccordion>
        </Box>
    );
}

export default ExpandableSection;
