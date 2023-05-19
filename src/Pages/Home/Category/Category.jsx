import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Category = () => {
    return (
        <div className='text-center space-x-3'>
            <Tabs>
                <TabList>
                    <Tab><button className="btn btn-primary">Sports Car</button>
                    </Tab>
                    <Tab><button className="btn btn-secondary">Truck</button>
                    </Tab>
                    <Tab><button className="btn btn-success">mini fire truck</button>
                    </Tab>
                    <Tab><button className="btn btn-warning">mini police car</button>
                    </Tab>

                </TabList>

                <TabPanel>
                    <h2>Sports Car</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Truck</h2>
                </TabPanel>
                <TabPanel>
                    <h2>mini fire truck</h2>
                </TabPanel>
                <TabPanel>
                    <h2>mini police car</h2>
                </TabPanel>
            </Tabs>


        </div>

    );
};

export default Category;