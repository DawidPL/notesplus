import React, { useState } from "react";
import {Tabs, Tab, AppBar} from "@mui/material/";
import { Link } from "react-router-dom";

import ReadmeCodeTab from "./ReadmeCodeTab";
import FrontCodeTab from "./FrontCodeTab";
import AdditionalInfoTab from "./AdditionalInfoTab";

const HeaderTabs = () =>{

    const handleTabs = (e, val) =>{
        console.log(val)
        setValue(val)
    }
    const [val, setValue] = useState(0);

    return(
        <div>
        <Tabs
            value={val}
            onChange={handleTabs}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
        >
            <Tab label="ReadMe"/>
            <Tab label="Kod"/>
            <Tab label="Uwagi"/>

        </Tabs>
        <TabPanel value={val} index={0}>
            <ReadmeCodeTab />
        </TabPanel>
        <TabPanel value={val} index={1}>
            <FrontCodeTab />
        </TabPanel>
        <TabPanel value={val} index={2}>
            <AdditionalInfoTab />
        </TabPanel>
        </div>
      
    )
}

function TabPanel(props){
    const{children, value, index}=props;

    return(
        <div>
            {value===index && (<div>{children}</div>)}
        </div>
    )
}


export default HeaderTabs