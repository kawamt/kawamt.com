declare namespace JSX {
  type ReactAmp = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;

  interface AmpImg extends ReactAmp {
    children?: React.ReactNode;
    alt?: string;
    attribution?: string;
    src?: string;
    srcset?: string;
    width?: string;
    height?: string;
    sizes?: string;
    heights?: string;
    layout?:
      | "fill"
      | "fixed"
      | "fixed-height"
      | "flex-item"
      | "intrinsic"
      | "nodisplay"
      | "responsive";
    fallback?: "";
    on?: string; // amp-image-lightbox
    role?: string;
    tabindex?: string;
  }

  interface AmpYoutube extends ReactAmp {
    children?: React.ReactNode;
    "data-videoid": string;
    dataLiveChannelid?: string;
    width: string;
    height: string;
    layout?:
      | "fill"
      | "fixed"
      | "fixed-height"
      | "flex-item"
      | "nodisplay"
      | "responsive";
  }

  interface IntrinsicElements {
    "amp-img": AmpImg;
    "amp-youtube": AmpYoutube;
  }
}
