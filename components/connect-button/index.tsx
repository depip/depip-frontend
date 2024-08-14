import { ConnectButton, useAccount } from "@particle-network/connectkit";
export default function ConnectButtonCustom() {
  const { address, isConnected, chainId } = useAccount();
  return (
    <>
      {isConnected ? (
        <>
          <h2>Address: {address}</h2>
          <h2>Chain ID: {chainId}</h2>
        </>
      ) : (
        <ConnectButton />
      )}
    </>
  );
}
