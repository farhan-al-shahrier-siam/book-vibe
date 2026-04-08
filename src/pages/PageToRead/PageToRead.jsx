import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { BookContext } from "../../context/BookContext";

const PageToRead = () => {
  const { storedBooks } = useContext(BookContext);

  const TriangleBar = ({ x, y, width, height, fill }) => (
    <path
      d={`
        M ${x},${y + height} 
        L ${x + width},${y + height} 
        L ${x + width / 2},${y} 
        Z
      `}
      fill={fill}
    />
  );

  return (
    <div className="container mx-auto h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={storedBooks}>
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PageToRead;