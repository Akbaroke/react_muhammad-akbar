import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import TableCustom from '../components/TableCustom';

export default function Product({ products, setProducts, onLogout }) {
  const navigate = useNavigate();
  console.log(products);

  return (
    <div className="m-auto my-10 shadow-lg rounded-lg overflow-hidden">
      <div className="p-5 bg-gray-200 flex items-center justify-between">
        <h1 className="text-xl font-bold">Products</h1>
        <div className="flex gap-2">
          <Button className="h-10" onClick={() => navigate('/create')}>
            Create New
          </Button>
          <Button
            className="h-10 bg-red-500"
            onClick={() => {
              onLogout();
              navigate('/', { replace: true });
            }}>
            Logout
          </Button>
        </div>
      </div>
      <div className="p-5">
        <TableCustom products={products} setProducts={setProducts} />
      </div>
    </div>
  );
}
