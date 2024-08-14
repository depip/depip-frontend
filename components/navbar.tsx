import ConnectButtonCustom from "./connect-button";

const Navnar = ({ onClick }) => {
  return (
    <>
      <nav className="fixed z-30 top-0 left-0 w-screen border-b">
        <div className="flex flex-wrap justify-between items-center p-6">
          <div onClick={onClick} className="flex items-center">
            <svg
              width="97"
              height="28"
              viewBox="0 0 97 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.04167 0H0V4V8V12V16V20H4.04167H8.08333H12.125H16.1667V16H20.2083V12V8V4H16.1667V8V12V16H12.125H8.08333H4.04167V12V8V4L8.08333 4H12.125H16.1667V0H12.125H8.08333H4.04167ZM28.2917 0H24.25V4V8V12V16V20H28.2917H32.3333H36.375H40.4167V24V28H44.4583V24V20H48.5H52.5417H56.5833V16H60.625V12H64.6667V16V20V24H60.625V28H64.6667H68.7083H72.75V24H68.7083V20V16V12H72.75V8H68.7083H64.6667H60.625V12H56.5833V8H52.5417H48.5H44.4583H40.4167V12V16H36.375H32.3333H28.2917V12H32.3333H36.375V8H32.3333H28.2917V4L32.3333 4H36.375H40.4167V0H36.375H32.3333H28.2917ZM56.5833 12V16H52.5417H48.5H44.4583V12H48.5H52.5417H56.5833ZM76.7917 8H80.8333H84.875H88.9167H92.9583V12H88.9167H84.875H80.8333V16H84.875H88.9167H92.9583V20H88.9167H84.875H80.8333V24V28H76.7917V24V20V16V12V8ZM92.9583 16V12H97V16H92.9583ZM44.4583 4V2.14577e-06L92.9583 0V4L44.4583 4ZM0 24V28L36.375 28V24L0 24Z"
                fill="#111111"
              />
            </svg>
          </div>
          <div className="hidden lg:flex lg:items-center"></div>
          <div className="flex items-center"></div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <ConnectButtonCustom></ConnectButtonCustom>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navnar;
