import React, { useState } from "react";
import { Row, Col, Pagination } from "antd";
import CardComponent from "./CardComponent";
import { Billboard } from "@/lib/SampleData";
interface Pros{
  dataCard: Billboard[]
}
const BillboardGrid = ({dataCard}:Pros) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // Số phần tử mỗi trang (2 hàng, mỗi hàng 3 phần tử)

  const handleBooking = (id: string) => {
    console.log("Booking billboard with ID:", id);
  };

  // Phân trang dữ liệu
  const paginatedBillboards = dataCard.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="mt-[64px] w-full overflow-hidden flex flex-col  items-center">
      {/* Hiển thị billboard theo hàng */}
      <Row gutter={[24, 24]} className="flex-grow p-3">
        {paginatedBillboards.map((billboard) => (
          <Col key={billboard.id} xs={24} sm={12} md={12} lg={8}> 
            <CardComponent
              image={billboard.images[0]}
              location={billboard.address}
              price={billboard.price}
              onBooking={() => handleBooking(billboard.id)}
            />
          </Col>
        ))}
      </Row>

      {/* Phân trang */}
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={dataCard.length}
        onChange={(page) => setCurrentPage(page)}
        style={{marginTop:"10px", textAlign: "center" }}
      />
    </div>
  );
};

export default BillboardGrid;
