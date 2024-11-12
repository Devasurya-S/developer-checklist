import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../css/accordion.css';

export default function AccordionUsage({ items, onStatusChange }) {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return <p>No items available</p>;
  }

  return (
    <div>
      {items.map((item, itemIndex) => (
        <Accordion key={itemIndex} className="mb-2 border-none shadow-none bg-item rounded-4">
          <div className='d-flex align-items-center'>
            <input
              type="checkbox"
              id={`item-${itemIndex}`}
              checked={item.status} // The status for the item
              onChange={(e) => {
                e.stopPropagation(); // Prevent the checkbox click from affecting the accordion
                onStatusChange(itemIndex); // Toggle the item's status
              }}
              className="custom-checkbox ms-3"
            />
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${itemIndex}-content`}
              id={`panel${itemIndex}-header`}
              className="fs-5 w-100"
              >
              <label className={`mb-0 fs-6 ${item.status ? 'text-decoration-line-through fst-italic' : ''}`}>
                {item.name}
              </label>
            </AccordionSummary>
          </div>
          
          <AccordionDetails>
            {item.descriptions.map((description, descIndex) => (
              <div
                key={descIndex}
                className="d-flex justify-content-between align-items-center accordion-detail p-3 rounded-4 mb-2"
              >
                <p
                  htmlFor={`desc-${itemIndex}-${descIndex}`}
                  className="w-100 fs-6 mb-0"
                >
                  {description.text}
                </p>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
