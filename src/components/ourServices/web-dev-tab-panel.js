import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabLayoutCon, TabPanelCont } from './styled';
import { Avatar } from '@mui/material';
import { WebDevProcess } from './services.data';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const avatarSize = { width: 80, height: 80 };

function TabPanelContent(title, img, desc) {
  return (
    <React.Fragment>
      <Box className='dispFlexColAlgnCen'>
        <Avatar variant='square' src={img} sx={{ ...avatarSize }} />
        <Typography variant='subtitle1' component='span'>
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography variant='body1' component='span' color='textSecondary'>
          {desc}
        </Typography>
      </Box>
    </React.Fragment>
  );
}

export default function WebDevTabPanel() {
  const [value, setValue] = React.useState();

  React.useEffect(() => {
    setValue(0);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabLayoutCon>
      <Tabs
        orientation='vertical'
        value={value || 0}
        fullWidth
        onChange={handleChange}
        aria-label='Vertical tabs example'
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label='Planning' {...a11yProps(0)} />
        <Tab label='Design' {...a11yProps(1)} />
        <Tab label='Prototype' {...a11yProps(2)} />
        <Tab label='Development' {...a11yProps(3)} />
        <Tab label='Software Quality Assurance' {...a11yProps(4)} />
        <Tab label='DevOps Services' {...a11yProps(5)} />
        <Tab label='Support and Maintaince' {...a11yProps(6)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <TabPanelCont>
          {TabPanelContent(
            WebDevProcess[0].title,
            WebDevProcess[0].img,
            WebDevProcess[0].desc
          )}
        </TabPanelCont>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabPanelCont>
          {TabPanelContent(
            WebDevProcess[1].title,
            WebDevProcess[1].img,
            WebDevProcess[1].desc
          )}
        </TabPanelCont>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabPanelCont>
          {TabPanelContent(
            WebDevProcess[2].title,
            WebDevProcess[2].img,
            WebDevProcess[2].desc
          )}
        </TabPanelCont>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TabPanelCont>
          {TabPanelContent(
            WebDevProcess[3].title,
            WebDevProcess[3].img,
            WebDevProcess[3].desc
          )}
        </TabPanelCont>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TabPanelCont>
          {TabPanelContent(
            WebDevProcess[4].title,
            WebDevProcess[4].img,
            WebDevProcess[4].desc
          )}
        </TabPanelCont>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <TabPanelCont>
          {TabPanelContent(
            WebDevProcess[6].title,
            WebDevProcess[6].img,
            WebDevProcess[6].desc
          )}
        </TabPanelCont>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <TabPanelCont>
          {TabPanelContent(
            WebDevProcess[5].title,
            WebDevProcess[5].img,
            WebDevProcess[5].desc
          )}
        </TabPanelCont>
      </TabPanel>
    </TabLayoutCon>
  );
}
