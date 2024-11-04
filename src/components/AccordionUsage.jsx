import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
  return (
    <div>
      <Accordion className='mb-2 border-none shadow-none bg-item rounded-4'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='fs-5'
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          <p className='accordion-detail p-3 rounded-4'>hello</p>
          <p className='accordion-detail p-3 rounded-4'>hello</p>
          <p className='accordion-detail p-3 rounded-4'>hello</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 border-none shadow-none bg-item rounded-4'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className='fs-5'
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          <p className='accordion-detail p-3 rounded-4'>hello</p>
          <p className='accordion-detail p-3 rounded-4'>hello</p>
          <p className='accordion-detail p-3 rounded-4'>hello</p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 border-none shadow-none bg-item rounded-4' defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          className='fs-5'
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          <p className='accordion-detail p-3 rounded-4'>hello</p>
          <p className='accordion-detail p-3 rounded-4'>hello</p>
          <p className='accordion-detail p-3 rounded-4'>hello</p>
        </AccordionDetails>
        {/* <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions> */}
      </Accordion>
    </div>
  );
}