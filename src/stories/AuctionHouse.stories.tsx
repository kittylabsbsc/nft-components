import { Story, Meta } from "@storybook/react";
import {
  NetworkIDs,
  Networks,
  NFTFetchConfiguration,
} from "@tulilabs/nft-hooks";

import { AuctionHouseList } from "../auction-house/AuctionHouseList";

type AuctionHouseArgs = {
  network: NetworkIDs;
  curatorId: string;
};

export default {
  title: "Renderer/AuctionHouseList",
} as Meta;

const Template: Story<AuctionHouseArgs> = (args) => (
  <NFTFetchConfiguration networkId={args.network}>
    <AuctionHouseList
      onClick={(_, auction) => alert(`Clicked token ${auction.tokenId}`)}
      curatorIds={[args.curatorId]}
    />
  </NFTFetchConfiguration>
);

export const Images = Template.bind({});
Images.args = {
  network: Networks.RINKEBY,
  curatorId: "0xC0000dFb8f4efcd35D3930F005e8B50ea65001ed",
};
