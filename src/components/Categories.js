import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Movies from "./Movies";
import Books from "./Books";
import Chapters from './Chapters';
import Characters from './Characters';
import Quotes from './Quotes';


//MUI component here as TabPanel
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Films" {...a11yProps(0)} />
        <Tab label="Books" {...a11yProps(1)} />
        <Tab label="Characters" {...a11yProps(2)} />
        <Tab label="Quotes" {...a11yProps(3)} />
        <Tab label="Book Chapters" {...a11yProps(4)} />
      
      </Tabs>
      <TabPanel value={value} index={0}>

       <Movies/>

      </TabPanel>
      <TabPanel value={value} index={1}>
        <Books/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Characters/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Quotes/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Chapters/>
      </TabPanel>
    
    </Box>
  );
}