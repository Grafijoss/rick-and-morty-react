interface Theme {
  widthContainer: number;
}

interface StyledProps {
  theme: Theme;
}

interface SVGProps {
  fill: string;
  height?: number;
  width?: number;
}

export { StyledProps, SVGProps };
