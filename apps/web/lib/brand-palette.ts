export const brandPalette = {
  paper: "#FFFFFF",
  porcelain: "#F7F9FC",
  mist: "#EAF0F6",
  line: "#D1D7E0",
  slate: "#858D97",
  ink: "#05172E",
  night: "#05214A",
  navy: "#022A7A",
  blue: "#0B4EA2",
  steel: "#59789D",
  gold: "#D8B44A",
  bronze: "#967862"
} as const;

export type BrandColorName = keyof typeof brandPalette;
