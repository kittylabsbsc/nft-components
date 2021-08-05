import { Networks } from "@tulilabs/nft-hooks";

export const MEDIA_URL_BASE_BY_NETWORK = {
  [Networks.MAINNET]: "https://eth.tuli.work/profile/",
  [Networks.RINKEBY]: "https://r.tuli.work/profile/",
  [Networks.BSC]: "https://tuli.work/profile/",
  [Networks.POLYGON]: "https://m.tuli.work/profile/",
};

export const VIEW_ETHERSCAN_URL_BASE_BY_NETWORK = {
  [Networks.MAINNET]: "https://etherscan.io/token/",
  [Networks.RINKEBY]: "https://rinkeby.etherscan.io/token/",
  [Networks.BSC]: "https://bscscan.com/token/",
  [Networks.RINKEBY]: "https://polygonscan.com/token/",
};

export const TULI_SITE_URL_BASE = "https://tuli.work/profile/";
