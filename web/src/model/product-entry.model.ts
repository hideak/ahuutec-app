import SortableListItem from './interface/sortable-list-item.interface';

/**
 * Class that represents the a product that were provided to a client
 */
export default class ProductEntry implements SortableListItem {
  id: number;
  productId: number | null;
  name: string;
  price: number;

  /**
   * Constructor
   */
  constructor(id: number, productId: number | null, name: string, price: number) {
    this.id = id;
    this.productId = productId;
    this.name = name;
    this.price = price;
  }
}
