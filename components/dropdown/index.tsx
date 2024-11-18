import { useState } from "react";
import Item from "./item";
import { useDepip } from "@/provider/depip.provider";
import { IpAsset } from "@/types/types";

type ButtonProps = {
  className?: string;
  selectedItem;
  setSelectedItem;
};

const Dropdown: React.FC<ButtonProps> = ({
  className = "",
  selectedItem,
  setSelectedItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { listIP } = useDepip();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  return (
    <div
      onClick={toggleDropdown}
      className={`relative border rounded-xl hover:shadow-lg ${className}`}
    >
      {selectedItem ? (
        <Item isActive={true} item={selectedItem} />
      ) : (
        <div className="h-14 w-full p-4 rounded-lg justify-start items-center gap-4 inline-flex">
          <div className="grow shrink basis-0 text-[#1c1c1c]/40 text-base font-medium font-geist leading-normal">
            Select an IP asset
          </div>
          <div className="w-5 h-5 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.83366 6.66699H4.16699V8.33366H5.83366V10.0003H7.50033V11.667H9.16699V13.3337H10.8337V11.667H12.5003V10.0003H14.167L14.167 8.33366H15.8337V6.66699H14.167V8.33366H12.5003V10.0003H10.8337V11.667H9.16699V10.0003H7.50033V8.33366H5.83366V6.66699Z"
                fill="#1C1C1C"
                fill-opacity="0.8"
              />
            </svg>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-80 overflow-auto z-50">
          {listIP.map((item: IpAsset) => (
            <Item item={item} handleSelect={handleSelect} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
