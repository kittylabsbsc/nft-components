import { Story, Meta } from "@storybook/react";
import { NFTFullPage } from "../nft-full/NFTFullPage";
import { MediaConfiguration } from "../context/MediaConfiguration";
import { Networks } from "@tulilabs/nft-hooks";

export default {
  title: "Renderer/NFTFull",
  component: NFTFullPage,
} as Meta;

const Template: Story<typeof NFTFullPage> = (args) => (
  <MediaConfiguration
    networkId={(args as any).testnet ? Networks.BSC : Networks.MAINNET}
  >
    {/* @ts-ignore */}
    <NFTFullPage {...args} />
  </MediaConfiguration>
);

export const Image = Template.bind({});
Image.args = {
  id: "3366",
  config: {
    showPerpetual: false,
  },
  refreshInterval: 5000,
};

export const Video = Template.bind({});
Video.args = {
  id: "",
};

export const GIF = Template.bind({});
GIF.args = {
  id: "",
};

export const Audio = Template.bind({});
Audio.args = {
  id: "",
};

export const Text = Template.bind({});
Text.args = {
  id: "",
};

export const PDF = Template.bind({});
PDF.args = {
  id: "",
};

export const HTML = Template.bind({});
HTML.args = {
  id: "",
};

export const FND = Template.bind({});
FND.args = {
  id: "7",
  contract: "0x5083E377053dfC9bf0f898A15E903cB46094fdFA",
};

export const NonTuliImage = Template.bind({});
NonTuliImage.args = {
  id: "5683",
  contract: "0xb7f7f6c52f2e2fdb1963eab30438024864c313f6",
};

export const ArtBlocks = Template.bind({});
ArtBlocks.args = {
  id: "83000067",
  contract: "0x152eee3dcc5526efd646e9b45c9a9672bffcc097",
  testnet: true,
};

export const CryptoKitty = Template.bind({});
CryptoKitty.args = {
  id: "556",
  contract: "0x06012c8cf97bead5deae237070f9587f8e7a266d",
};
