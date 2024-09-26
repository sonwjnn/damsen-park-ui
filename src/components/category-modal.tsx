import React from "react";
import { ConfigProvider, Modal, Tabs } from "antd";
import type { TabsProps } from "antd";
import { useCategoryModal } from "../store/use-category-modal";

const Column = ({
  label,
  data,
}: {
  label?: string;
  data: { id: string; name: string }[];
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h3 className="text-xl font-bold text-[#259E58]  capitalize tracking-wide mb-2">
        {label}
      </h3>
      {data.map((item) => (
        <div
          key={item.id}
          className="flex items-center py-1 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap "
        >
          <span className="w-6 h-6 flex items-center justify-center bg-white border border-pink-500 text-pink-500 rounded-full mr-2 text-xs">
            {item.id}
          </span>
          <span className="text-gray-700">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

const CategoryModal: React.FC = () => {
  const [open, setOpen] = useCategoryModal();

  const handleCancel = () => {
    setOpen(false);
  };

  const categories = [
    {
      key: "trochoi",
      label: <div className="font-bangers text-3xl font-normal">TRÒ CHƠI</div>,
      children: (
        <div className="grid grid-cols-4 gap-4 p-4">
          <Column
            label="CẢM GIÁC MẠNH"
            data={[
              { id: "01", name: "Cá Chép Nhảy Lớn" },
              { id: "02", name: "Lâu Đài Kinh Dị" },
              { id: "03", name: "Phượng Hoàng Bay" },
              { id: "04", name: "Spinning Coaster" },
              { id: "05", name: "Xe Bay Ảo Tưởng" },
              { id: "06", name: "Thám Bay" },
              { id: "07", name: "Vòng Quay Thần Tốc" },
              { id: "08", name: "Power Surge" },
              { id: "09", name: "Tàu Vượt Thác" },
              { id: "10", name: "Roller Coaster" },
              { id: "11", name: "Vòng Xoay Không Gian" },
              { id: "12", name: "Đấu Trường Bò Tót" },
              { id: "13", name: "Xe Điện Đụng" },
            ]}
          />
          <Column
            label="TƯƠNG TÁC ẢO"
            data={[
              { id: "14", name: "Xem Phim Cinemax 8D" },
              { id: "15", name: "Đua Xe Turbo Racing" },
              { id: "16", name: "9D Virtual Reality" },
              { id: "17", name: "Bắn Súng Run Raider" },
              { id: "18", name: "Lâu Đài Kỳ Thú" },
            ]}
          />
          <Column
            label="GIẢI TRÍ"
            data={[
              { id: "19", name: "Băng Đăng" },
              { id: "20", name: "Đu Quay Dứng Ferris Wheel" },
              { id: "21", name: "Monorail" },
              { id: "22", name: "Đạp Vịt Pedalo" },
              { id: "62", name: "Massage Cá" },
            ]}
          />
          <Column
            label="THIẾU NHI"
            data={[
              { id: "23", name: "Ếch Nhảy" },
              { id: "24", name: "Điệu Nhảy Thiên Thần" },
              { id: "25", name: "Khỉnh Khí Cầu Bay" },
              { id: "26", name: "Hải Cẩu Vượt Thác" },
              { id: "27", name: "Ngựa Bay" },
              { id: "28", name: "Kids Playground" },
              { id: "29", name: "Khủng Long Bay" },
              { id: "30", name: "Siêu Nhân Robot" },
              { id: "31", name: "Rồng Lượn" },
              { id: "32", name: "Vòng Lượn Tuổi Thơ" },
              { id: "33", name: "Pháo Đài Bay" },
              { id: "34", name: "Nhà Hơi Liên Hoàn" },
            ]}
          />
        </div>
      ),
    },
    {
      key: "vuonthu",
      label: <div className="font-bangers text-3xl font-normal">VƯỜN THÚ</div>,
      children: (
        <div className="grid grid-cols-4 gap-4 p-4">
          <Column
            data={[
              { id: "35", name: "Khỉ Đuôi Dài" },
              { id: "36", name: "Gấu Ngựa" },
              { id: "37", name: "Đười Ươi Sumatra" },
            ]}
          />
          <Column
            data={[
              { id: "38", name: "Hà Mã Châu Phi" },
              { id: "39", name: "Voi Châu Á" },
              { id: "40", name: "Vườn Đen Mã Vàng" },
            ]}
          />
          <Column
            data={[
              { id: "41", name: "Thủy Cung" },
              { id: "42", name: "Vườn Chim" },
              { id: "43", name: "Hồ Cá Hải Tượng" },
            ]}
          />
          <Column
            data={[
              { id: "42", name: "Vườn Chim" },
              { id: "43", name: "Hồ Cá Hải Tượng" },
            ]}
          />
        </div>
      ),
    },
    {
      key: "canhdep",
      label: <div className="font-bangers text-3xl font-normal">CẢNH ĐẸP</div>,
      children: (
        <div className="grid grid-cols-2 gap-4 p-4">
          <Column
            data={[
              { id: "46", name: "Nam Tử Thượng Uyển" },
              { id: "47", name: "Đảo Lan Rừng" },
              { id: "48", name: "Vườn Nhật Bản" },
              { id: "49", name: "Vườn Xương Rồng" },
              { id: "50", name: "Địa Điểm Sống Ảo" },
            ]}
          />
          <Column
            data={[
              { id: "51", name: "Quảng Trường Vua Hùng" },
              { id: "52", name: "Quảng Trường Âu Lạc" },
              { id: "53", name: "Quảng Trường La Mã" },
              { id: "54", name: "Cầu Cửu Khúc" },
            ]}
          />
        </div>
      ),
    },
    {
      key: "sankhau",
      label: <div className="font-bangers text-3xl font-normal">SÂN KHẤU</div>,
      children: (
        <div className="grid grid-cols-1 gap-4 p-4">
          <Column
            data={[
              { id: "55", name: "Sân Khấu Dế Mèn" },
              { id: "56", name: "Rạp Xiếc Thú" },
              { id: "57", name: "Sân Khấu Ngôi Sao" },
            ]}
          />
        </div>
      ),
    },
    {
      key: "giaoductrai",
      label: (
        <div className="font-bangers text-3xl font-normal">
          GIÁO DỤC TRẢI NGHIỆM
        </div>
      ),
      children: (
        <div className="grid grid-cols-1 gap-4 p-4">
          <Column
            data={[
              { id: "58", name: "Nhà Trưng Bày Tiêu Bản Động Vật" },
              { id: "59", name: "Thực Vật" },
            ]}
          />
        </div>
      ),
    },
    {
      key: "amthuc",
      label: <div className="font-bangers text-3xl font-normal">ẨM THỰC</div>,
      children: (
        <div className="grid grid-cols-1 gap-4 p-4">
          <Column
            data={[
              { id: "60", name: "Nhà Hàng Thủy Tạ" },
              { id: "61", name: "Cà Phê Vườn Đá" },
              { id: "63", name: "Damsen Plaza" },
            ]}
          />
        </div>
      ),
    },
  ];

  const items: TabsProps["items"] = categories.map((category) => ({
    key: category.key,
    label: <span className="text-lg font-semibold">{category.label}</span>,
    children: category.children,
  }));

  return (
    <Modal open={open} onCancel={handleCancel} footer={null} width={1280}>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              horizontalItemGutter: 0,
              itemColor: "#67776F",
              itemHoverColor: "#67776F",
              itemSelectedColor: "#EC008C",
              inkBarColor: "#EC008C",
            },
          },
        }}
      >
        <Tabs
          defaultActiveKey="trochoi"
          items={items}
          tabBarStyle={{ marginBottom: 0 }}
          tabBarGutter={32}
          className="min-h-[700px]"
        />
      </ConfigProvider>
    </Modal>
  );
};

export default CategoryModal;
