import React from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports for MUI components
const Typography = dynamic(() => import('@mui/material/Typography'), { ssr: false });
const Accordion = dynamic(() => import('@mui/material/Accordion'), { ssr: false });
const AccordionSummary = dynamic(() => import('@mui/material/AccordionSummary'), { ssr: false });
const AccordionDetails = dynamic(() => import('@mui/material/AccordionDetails'), { ssr: false });
const ExpandMoreIcon = dynamic(() => import('@mui/icons-material/ExpandMore'), { ssr: false });

const Benefits = (props) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="wpo-benefits-section">
            <h2>Destination FAQ</h2>
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="wpo-benefits-item">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography>What are the main attractions in Melbourne's West?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Melbourne's West offers diverse attractions including Scienceworks Museum, Werribee Open Range Zoo, Altona Beach, and the historic Williamstown waterfront. The region is famous for its multicultural food scene, particularly in Footscray, and features beautiful parks like Brimbank Park and Werribee Park Mansion.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography>What makes Melbourne's North unique?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Melbourne's North is known for its vibrant arts scene, cafe culture, and historic neighborhoods. Key features include the Queen Victoria Market, Brunswick's street art, Lygon Street's Italian precinct, and extensive bike trails along Merri Creek. The area offers a perfect blend of cultural diversity, entertainment, and outdoor activities.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography>What can visitors explore in Melbourne's South East?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The South East region features the iconic Brighton Beach Bathing Boxes, Chadstone Shopping Centre, and the scenic Dandenong Ranges. Visitors can enjoy the historic Puffing Billy Railway, explore diverse dining options in Glen Waverley, and experience the vibrant Chapel Street precinct with its boutiques and nightlife.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography>What makes Geelong a must-visit destination?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Geelong, as Victoria's second-largest city, offers the stunning Waterfront precinct, National Wool Museum, and easy access to the Great Ocean Road. Visitors can enjoy the Eastern Beach Swimming Enclosure, explore the You Yangs Regional Park, and experience the city's growing food and wine scene along with numerous cultural festivals throughout the year.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits;