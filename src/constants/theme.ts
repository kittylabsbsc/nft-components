export const ThemeOptions = {
  /**
   * Overall preview card settings (width height and background)
   * @default {width: '330px', height: '330px', background: 'transparent'}
   */
  previewCard: {
    width: '330px',
    height: '330px',
    background: "white",
  },

  nftProposalCard: {
    mediaWidth: '160px',
    mediaHeight: '160px',
  },

  /**
   * Padding for preview card text block
   * @default 10px 15px
   */
  textBlockPadding: "10px 15px",
  /**
   * Border style for preview card text block
   * @default 2px solid #e6e6e6
   */
  borderStyle: "2px solid #e6e6e6",

  /**
   * Line-spacing on preview component
   * @default 24
   */
  lineSpacing: 24,

  /**
   * Maximum number of decimal digits to show
   * for pricing information
   * @default 8
   */
  maximumPricingDecimals: 8,

  /**
   * Color for link on full preview page authenticity link
   * @default #000
   */
  linkColor: "#0B0818",

  /**
   * Settings for body text font
   * @default font-family: Inter, Helvetica; font-weight: 400;
   */
  bodyFont: `
    font-family: Inter, Helvetica;
    font-weight: 400;
  `,

  /**
   * Settings for title font
   * Type is parsed as a css string.
   * @default font-family: Inter, Helvetica; font-weight: 500;
   */
  titleFont: `
    font-family: Inter, Helvetica;
    font-weight: 500;
  `,

  /**
   * Settings for header font
   * Type is parsed as a css string.
   * @default font-family: Inter, Helvetica; font-weight: 500;
   */
  headerFont: `
    font-family: Inter, Helvetica;
    font-weight: 500;
  `,

  /**
   * Font to use when rendering text NFTs
   * @default {fontFamily: "Times New Roman"}
   */
  mediaContentFont: {
    fontFamily: "Verdana",
  },

  /**
   * Button color configurations
   * @default {primaryBackground: '#333', primaryText: '#fff', background: '#eee'}
   */
  buttonColor: {
    primaryBackground: "#333",
    primaryText: "#fff",
    background: "#eee",
    text: "#000",
  },

  /**
   * Border radius to use around preview card
   * @default 4
   */
  defaultBorderRadius: 14,

  /**
   * Font size base for full view page
   * @default 16
   */
  fontSizeFull: 14,
};


export type ThemeOptionsType = typeof ThemeOptions;
