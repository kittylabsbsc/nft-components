# 💅 @tulilabs/nft-components

Tuli's NFT components allow you to easily create your own gallery or auction house with xNFT infrastructure.

This library provides the front-end display components on top of the [`@tulilabs/nft-hooks`](https://github.com/ourtuli/nft-hooks) data-fetching library;

This library works alongside the Tuli [auction house](https://tuli.mirror.xyz/9mQ9AeJK84USTnQ9eBY4Sc7s1bi0N8RoZd3Oy4q82FM) ([code](https://github.com/ourtuli/auction-house)) allows for DAOs and individuals to run their own decentralized auction house. Currently, only xNFTs are supported by this library but plans are to add in support for arbitary NFTs.

✨ [view docs on storybook](https://ourtuli.github.io/nft-components) →

## NFT Components

These components allow for drop-in rendering of NFTs. They work on the frontend and do not need any server-side components. These components are aware of both ongoing auctions and the perpetual markets for xNFTs, integrating latest bid information and other relevant marketplace information. They also handle most all of the same media types that the Tuli marketplace natively handles (audio, video, image, and text). The components can be modified as needed and should be used as a prototype look and feel. Under the hood, they use the @tulilabs/nft-hooks library to retrieve data, if more customization is needed for the look and feel of the components the underlying data can be retrieved directly.

### Main components:

- [NFTPreview](https://ourtuli.github.io/nft-components?path=/docs/renderer-nftpreview--image)
  - Used to render a xNFT preview thumbnail
- [NFTFullPage](https://ourtuli.github.io/nft-components?path=/docs/renderer-nftfull--image)
  - Used to render a xNFT full page component
- [NFTDataProvider](https://ourtuli.github.io/nft-components?path=/story/renderer-nftdataprovider--page)
  - Used to compose a custom set of xNFT components
- [MediaConfiguration](https://ourtuli.github.io/nft-components?path=/story/renderer-mediaconfiguration--page)
  - Configure the text, theme, and network settings for the xNFT.
- [AuctionHouseList](https://ourtuli.github.io/nft-components?path=/docs/renderer-auctionhouselist--images)
  - Load a list of auctions for a given curator

### Key Features:

- [Server-side rendering](https://ourtuli.github.io/nft-components?path=/story/about-serverrendering--page)
- [Customizable theming / styling](https://ourtuli.github.io/nft-components?path=/story/theming-previewcomponent--preview-card)
- [Customizable information ordering / display](https://ourtuli.github.io/nft-components?path=/story/renderer-about--page)
- [Updatable media rendering](https://ourtuli.github.io/nft-components?path=/story/about-customcomponentdocs--page)

### Quickstart

1. Install package:
```bash
yarn add @tulilabs/nft-components
```

2. Render a NFT Thumbnail:

```tsx
import { NFTPreview } from "@tulilabs/nft-components";

export const Page = () => <NFTPreview id="3002" />;
```

3. Render a NFT Full page:

```tsx
import { NFTFullPage } from "@tulilabs/nft-components";

export const Page = () => <NFTFullPage id="3002" />;
```

4. Render a list of auctions for a curator:

```tsx
import { NFTFullPage } from "@tulilabs/nft-components";

export const Page = ({curatorId}: {curatorId: string}) => (
    <AuctionHouseList
      onClick={(_, auction) => alert(`Clicked token ${auction.tokenId}`)}
      curatorIds={[curatorId]}
    />
);
```


4. Render a proposed auction:

```tsx
import { NFTProposal } from "@tulilabs/nft-components";

export const Page = () => <NFTProposal id="3002" />;
```
