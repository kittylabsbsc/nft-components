import { useContext } from "react";

import { NFTDataContext } from "../context/NFTDataContext";
import { MediaObject } from "../components/MediaObject";
import { useMediaContext } from "../context/useMediaContext";

type MediaFullProps = {
  a11yIdPrefix?: string;
};

export const MediaFull = ({ a11yIdPrefix }: MediaFullProps) => {
  const { getStyles } = useMediaContext();
  const {
    nft: { data },
    metadata: { metadata, error },
  } = useContext(NFTDataContext);

  const getContent = () => {
    if (metadata && data) {
      return (
        <MediaObject
          isFullPage={true}
          contentURI={"tuliNFT" in data ? data.tuliNFT?.contentURI : undefined}
          metadata={metadata}
          a11yIdPrefix={a11yIdPrefix}
        />
      );
    }
    if (error) {
      return <div {...getStyles("mediaLoader")}>error fetching...</div>;
    }
    return <div {...getStyles("mediaLoader")}>loading...</div>;
  };

  const media = getContent();
  return <div {...getStyles("fullMediaWrapper")}>{media}</div>;
};
