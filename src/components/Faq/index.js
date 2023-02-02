import "./faq.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = (props) => {
  const { faqList } = props;
  return (
    <div id="faq" className="faq-container">
      <div>
        <h1>Frequently Asked Question</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
      </div>
      <div className="Accordion">
        {faqList.map((item, key) => (
          <Accordion
            sx={{
              border: 1,
              borderColor: "#FFFFFF",
              borderRadius: "4px",
              mt: 1,
              boxShadow: 0,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
