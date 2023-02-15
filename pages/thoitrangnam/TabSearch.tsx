import { Tabs } from "flowbite-react";
import React from "react";
import ListProductdetail from "../components/ListProductdetail";

const TabSearch = ({ prop }: any) => {
  return (
    <div>
      <div className="bg-gray-200 rounded-xl">
        <div className="mt-3">
          <Tabs.Group aria-label="Tabs with underline" style="underline">
            <Tabs.Item active={true} title="Search">
              <ListProductdetail prop={prop} />
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>
    </div>
  );
};

export default TabSearch;
