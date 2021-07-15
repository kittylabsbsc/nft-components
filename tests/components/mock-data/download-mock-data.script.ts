import { writeFileSync } from "fs";
import { MediaFetchAgent, NetworkIDs, Networks } from "@tulilabs/nft-hooks";

export const DownloadHooks = async (args: {
  fileName: string;
  tokenId: string;
  contractId?: string;
  network: NetworkIDs;
}) => {
  const {
    fileName,
    tokenId,
    contractId = undefined,
    network = Networks.MAINNET,
  } = args;
  const fetchAgent = new MediaFetchAgent(network);
  try {
    const data = contractId
      ? await fetchAgent.loadNFTData(contractId, tokenId)
      : await fetchAgent.loadXNFTData(tokenId);
    writeFileSync(
      fileName,
      JSON.stringify(
        {
          args,
          data,
        },
        null,
        2
      )
    );
  } catch (e) {
    console.error(e);
  }
};
