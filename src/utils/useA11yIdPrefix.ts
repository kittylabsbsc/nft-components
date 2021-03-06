import { useState } from "react";

let idCounter = 0;

export const useA11yIdPrefix = (text: string) =>
  useState(() => `tuli-a11y-${idCounter++}-${text}`)[0];
