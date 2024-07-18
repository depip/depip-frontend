import { ConnectButton } from "@rainbow-me/rainbowkit";
import Button from "../button";
export default function ConnectButtonCustom() {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted;
        const connected = ready && account && chain;
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    onClick={openConnectModal}
                    className="w-auto h-12 px-6 py-3"
                  >
                    <div className="w-4 h-4 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.9997 2H2.66634H1.33301V3.33333V12.6667V14H2.66634H11.9997H13.333V12.6667V11.3333H14.6663V10V6V4.66667H13.333V3.33333V2H11.9997ZM11.9997 11.3333V12.6667H2.66634V3.33333H11.9997V4.66667H7.99967H6.66634V6V10V11.3333H7.99967H11.9997ZM13.333 10H11.9997H7.99967V6H11.9997H13.333V10ZM10.6663 7.33333H9.33301V8.66667H10.6663V7.33333Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="text-xs font-normal font-pixel uppercase leading-5">Connect Wallet</div>
                  </Button>
                );
              }
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
