import { ConnectButton, useAccount } from "@particle-network/connectkit";
export default function ConnectButtonCustom() {
  const { address, isConnected, chain } = useAccount();
  return (
    <>
      {/* {isConnected ? (
        <>
          <h2>Address: {address}</h2>
          <h2>Chain: {chain.name}</h2>
        </>
      ) : ( */}
        <ConnectButton />
      {/* )} */}
    </>
  );
}
