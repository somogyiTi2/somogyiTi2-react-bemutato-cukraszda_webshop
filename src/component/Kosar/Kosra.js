import { useContext } from 'react';
import Kosarelem from './Kosarelem';
import InputContext from '../../store/InputContext'

const Kosar = (props) => {
    const cartCtx = useContext(InputContext);
 
  
    const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
    };
  
    const cartItemAddHandler = (item) => {
      cartCtx.addItem({ ...item, darab: 1 });
    };

    const cartItems = (
      <ul>
        {cartCtx.items.map((item) => (
          <Kosarelem
            key={item.id}
            name={item.name}
            ar={item.ar}
            darab={item.darab}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
    );

    return (
        <div>
            {cartItems}
            <div >
                <span>Total Amount</span>
                <span>teljesösszeg</span>
            </div>
            <div >
                <button  onClick={props.onHidenCart}>Close</button>
                
            </div>
        </div>
    );
}

export default Kosar;