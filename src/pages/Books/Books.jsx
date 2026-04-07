import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../../components/ReadList/ReadList";
import WishList from "../../components/WishList/WishList";

const Books = () => {

    const [sortingType, setSortingType] = useState("")

    return (
        <div className="container mx-auto my-3">
            <div>
                <div className="dropdown dropdown-end flex justify-end">
                    <div tabIndex={0} role="button" className="btn m-1">
                        Sort By: {sortingType}
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=>setSortingType("pages")}>
                            <a>pages</a>
                        </li>
                        <li onClick={()=>setSortingType("rating")}>
                            <a>rating</a>
                        </li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ReadList sortingType={sortingType}></ReadList>
                </TabPanel>
                <TabPanel>
                    <WishList sortingType={sortingType}></WishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;
