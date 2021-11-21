import React from "react";
import { Select } from "antd";
import { FILTER_PLACEHOLDER, FILTER_OPTIONS } from "../utils/constant";
import { useDataContext } from "../DataContext";

const { Option } = Select;

export default function Nav() {
  const { setFilter } = useDataContext();
  function onChange(value: string[]) {
    setFilter(value);
  }
  return (
    <div className="Nav">
      <div className="filter">
        <Select
          data-testid={FILTER_PLACEHOLDER}
          allowClear
          showSearch
          mode="multiple"
          style={{ width: "100%" }}
          placeholder={FILTER_PLACEHOLDER}
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {FILTER_OPTIONS.map((item) => {
            const { id, name } = item;
            return (
              <Option key={id} value={id}>
                {name}
              </Option>
            );
          })}
        </Select>
      </div>
    </div>
  );
}
