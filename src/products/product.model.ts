export type Size = "S" | "M" | "L" | "XL" | "XXL";
export type Product = { 
  name: string,
  createdAt: Date,
  stock: number,
  size?: Size
}