export interface ColorInterface {
  colors: {
    map(arg0: (color: string, index: number) => void): import("react").ReactNode;
    colors: string,
  };
}
