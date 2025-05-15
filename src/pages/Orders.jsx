import { useEffect, useState } from "react"

const Orders = () => {
    const[orders, setOrders] = useState([]);
    useEffect(() => {
        const stored = localStorage.getItem("orders");
        if(stored) {
            setOrders(JSON.parse(stored));
        }
    }, [])

    if(orders.length === 0) {
        return <div className="p-6 text-center text-gray-500">No orders yet.</div>;
    }
    return (
        <div className="p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
          {orders.map((order) => (
            <div key={order.id} className="mb-6 border-b pb-4">
              <div className="mb-2 text-gray-600 text-sm">Placed on {order.createdAt}</div>
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between mb-1">
                  <span>{item.title} × {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="font-semibold mt-2">Total: ${order.total.toFixed(2)}</div>
            </div>
          ))}
        </div>
      );
    };
    
    export default Orders;