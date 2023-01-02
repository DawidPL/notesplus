import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const headerTabs = () =>{

    return(
        <Tabs defaultActiveKey="source" id="source-code" className="mb-3">
            <Tab eventKey="source" title="Kod">

            </Tab>
            <Tab eventKey="front" title="Front">
                
            </Tab>
            <Tab eventKey="info" title="Dodatkowe informacje">
                
            </Tab>
        </Tabs>
    )
}