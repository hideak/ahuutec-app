/**
 * A DTO that represents a request to create a product
 */
export default class ProductCreate {
  name: string;
  stock: number | null;
  defaultPrice: number | null;
  details: string;

  /**
   * Constructor
   */
  constructor(
    name: string,
    stock: number | null,
    defaultPrice: number | null,
    details: string
  ) {
    this.name = name;
    this.stock = stock;
    this.defaultPrice = defaultPrice;
    this.details = details;
  }
}
