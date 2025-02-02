import { ref } from "vue";

const products = ref([
  { id: 1, name: "Меч алмаза", price: 1500, stock: 10 },
  { id: 2, name: "Золотая броня", price: 2500, stock: 5 },
  { id: 3, name: "Элитры", price: 5000, stock: 2 },
]);

const addProduct = (name: string, price: number, stock: number) => {
  if (!name || price <= 0 || stock < 0) {
    alert("Введите корректные данные!");
    return;
  }

  products.value.push({
    id: Date.now(),
    name,
    price,
    stock,
  });
};

const deleteProduct = (id: number) => {
  products.value = products.value.filter((product) => product.id !== id);
};

export default function useProducts() {
  return { products, addProduct, deleteProduct };
}
