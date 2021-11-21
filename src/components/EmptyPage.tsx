import React from "react";
import { Empty } from "antd";

export default function EmptyPage() {
  return (
    <div className="Empty">
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </div>
  );
}
