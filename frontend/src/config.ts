import { createPublicClient, http } from "viem";
import { polygon } from "viem/chains";

export const LENS_UI_HELPER_CONTRACT_ADDRESS =
  "0x8b0A28a8DE1de77668260A876c6DCF0330183742";

export const PROFILE_ID = 10859;

export const polygonHttpRpc = createPublicClient({
  chain: polygon,
  transport: http(),
});

export const IPFS_GATEWAY = "https://gateway.ipfs.io/ipfs/";
export const ARWEAVE_GATEWAY = "https://arweave.net/";
