import React from "react";

export enum RenderingPreference {
  INVALID = -1,
  FALLBACK = 0,
  LOW = 1,
  NORMAL = 2,
  PREFERRED = 3,
  PRIORITY = 4,
}

export type MediaUriType = {
  uri: string;
  type?: string;
};

export type RenderRequest = {
  media: {
    // from tuli content uri
    content?: MediaUriType;
    image?: MediaUriType;
    // from metadata.animation_url
    animation?: MediaUriType;
  };
  metadata: any;
  renderingContext: "PREVIEW" | "FULL";
};

export type RenderComponentType = {
  request: RenderRequest;
  // TODO(iain): Fix types
  getString: any;
  getStyles: any;
  a11yIdPrefix?: string;
};

export interface RendererConfig {
  getRenderingPreference(request: RenderRequest): RenderingPreference;
  render: React.FunctionComponent<RenderComponentType>;
}
