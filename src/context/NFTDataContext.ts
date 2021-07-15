import { createContext } from "react";
import { useNFTMetadataType, useNFTType, useXNFTType} from "@tulilabs/nft-hooks";

export type NFTDataContext = {
  nft: useNFTType | useXNFTType;
  metadata: useNFTMetadataType;
};

const DEFAULT_OBJECT = {
  loading: true,
  error: undefined,
};

export const NFTDataContext = createContext<NFTDataContext>({
  nft: { ...DEFAULT_OBJECT, currencyLoaded: false },
  metadata: { ...DEFAULT_OBJECT, metadata: undefined },
});
