import { useRef, useState } from "react";
import { insertOrder } from "../modules/db";

function CheckoutForm(props) {
  const theForm = useRef(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false)
  async function submit(e) {
    e.preventDefault();
    const response = await insertOrder({
      name: theForm.current.name.value,
      email: theForm.current.email.value,
      address: theForm.current.address.value,
      basket: props.cart,
    });
    if(response && response.length){
        setPaymentCompleted(true)
    }
  }
  return (
    <>
{paymentCompleted ? <p>Thank You </p> : (    <form onSubmit={submit} ref={theForm}>
      <div className="form-control">
        <label htmlFor="form-name">Name</label>
        <input type="text" name="name" id="form-name" required />
      </div>
      <div className="form-control">
        <label htmlFor="form-email">Email</label>
        <input type="email" name="email" id="form-email" required />
      </div>
      <div className="form-control">
        <label htmlFor="form-address">Address</label>
        <textarea name="address" id="form-address" required>
          {" "}
        </textarea>
      </div>

      <button>Pay</button>
    </form>)}
    </>
  );

}

export default CheckoutForm;
