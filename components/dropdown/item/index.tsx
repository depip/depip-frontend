import { IpAsset } from "@/types/types";

type ButtonProps = {
  item: IpAsset;
  handleSelect?: (item) => void;
  isActive?: boolean;
};

const Item: React.FC<ButtonProps> = ({
  item,
  handleSelect,
  isActive = false,
}) => {
  return (
    <div
      className="p-2 justify-between items-center gap-4 flex hover:bg-slate-400"
      onClick={() => {
        if (isActive) return;
        handleSelect(item);
      }}
    >
      <div className="justify-start items-center gap-2 flex">
        <div className="grow shrink basis-0 rounded justify-start items-start gap-2 flex">
          {item?.ipAssetData?.metadata_offchain?.image?.url ? (
            <img
              className="w-[40px] h-[40px] rounded object-cover"
              src={item?.ipAssetData?.metadata_offchain?.image?.url}
            />
          ) : (
            <svg
              className="w-[40px] h-[40px] text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          )}
        </div>
      </div>
      <div className="grow shrink basis-0 h-12 justify-start items-center gap-2 flex">
        <div className="grow shrink basis-0 h-12 justify-center items-baseline flex flex-col">
          <div className="text-[#1c1c1c] text-sm font-medium font-geist leading-normal">
            {item?.ipAssetData?.metadata_onchain?.metadata?.name || item?.name}
          </div>
          {/* <div className="grow shrink basis-0 text-[#1c1c1c]/80 text-xs font-medium font-geist leading-normal">
            {item?.token_id}
          </div> */}
        </div>
        {isActive && (
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
        )}
      </div>
    </div>
  );
};
export default Item;
