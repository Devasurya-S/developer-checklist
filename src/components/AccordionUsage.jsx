// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function AccordionUsage(items) {
//   return (
//     <div>
//       <Accordion className='mb-2 border-none shadow-none bg-item rounded-4'>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1-content"
//           id="panel1-header"
//           className='fs-5'
//         >
//           Utilize Figma Components for Repetition
//         </AccordionSummary>
//         <AccordionDetails>
//           <p className='accordion-detail p-3 rounded-4'>Convert recurring combinations of elements into Figma components.</p>
//           <p className='accordion-detail p-3 rounded-4'>Examples include type lockups, links, buttons, card and previews.</p>
//           <p className='accordion-detail p-3 rounded-4'>Consider turning repeated blocks of vertical content on multiple pages into components.</p>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion className='mb-2 border-none shadow-none bg-item rounded-4'>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//           className='fs-5'
//         >
//           Organize Components Effectively
//         </AccordionSummary>
//         <AccordionDetails>
//           <p className='accordion-detail p-3 rounded-4'>Move main components (original source components) to a dedicated "Components" frame.</p>
//           <p className='accordion-detail p-3 rounded-4'>Organinze components within this frame by type for clarity and efficent management.</p>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage(props) {
  const { items } = props;

  // If items are empty or not passed correctly
  if (!items || !Array.isArray(items) || items.length === 0) {
    return <p>No items available</p>;
  }

  return (
    <div>
      {items.map((item, itemIndex) => (
        <Accordion key={itemIndex} className='mb-2 border-none shadow-none bg-item rounded-4'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${itemIndex}-content`}
            id={`panel${itemIndex}-header`}
            className='fs-5'
          >
            {item.name}
          </AccordionSummary>
          <AccordionDetails>
            {/* <p className='accordion-detail p-3 rounded-4'>
              {item.description}
            </p> */}
            {item.descriptions.map((description, descIndex) => (
              <p key={descIndex} className='accordion-detail p-3 rounded-4'>
                {description}
              </p>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function AccordionUsage(props) {
//   const {items} = props
//   console.log(items)
//   return (
//     <div>
//       {items.map((item, index) => (
//         <Accordion key={index} className='mb-2 border-none shadow-none bg-item rounded-4'>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls={`panel${index + 1}-content`}
//             id={`panel${index + 1}-header`}
//             className='fs-5'
//           >
//             {item.name}
//           </AccordionSummary>
//           <AccordionDetails>
//             {item.descriptions.map((description, descIndex) => (
//               <p key={descIndex} className='accordion-detail p-3 rounded-4'>
//                 {description}
//               </p>
//             ))}
//           </AccordionDetails>
//         </Accordion>
//       ))}
//     </div>
//   );
// }
