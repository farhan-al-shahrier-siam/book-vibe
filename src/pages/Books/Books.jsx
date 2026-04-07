import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../../components/ReadList/ReadList";
import WishList from "../../components/WishList/WishList";

const Books = () => {

    return (
        <div className="container mx-auto my-3">
            
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ReadList></ReadList>
                </TabPanel>
                <TabPanel>
                    <WishList></WishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;
