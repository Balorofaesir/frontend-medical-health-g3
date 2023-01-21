import { useDispatch } from 'react-redux';
import { closeModal } from '../../features/modal/loginmodalSlice';
import './Terms.css';

const Terms = () => {
  const dispatch = useDispatch();
  return (
    <div className="termsOfService__global">
      <div className="termsOfService__container">
        <h1 className="termsOfService__title">TERMS AND CONDITIONS</h1>
        <p className="termsOfService__subtitle">
          Website Terms and Conditions of Use Relating to www.mebid.com
        </p>
        <p className="termsOfService__paragraph">
          These Terms and Conditions (<q>the Therms and Conditions</q>) govern
          your (<q>the User</q>) use of the MEBID (<q>Provider</q>) website
          located at the domain name www.mebid.com (<q>Website</q>). By
          accessing and using the Website, the User agrees to be bound by the
          Terms and Conditions set out in this legal notice. The User may not
          access, display, use, download, and/or otherwise copy or distribute
          Content obtained on the website for marketing and other purposes
          without the consent of the provider
        </p>

        <p className="termsOfService__subtitle">Electronic Communications</p>
        <p className="termsOfService__paragraph">
          By using this Website or communicating with the Provider by electronic
          means, the User consents and acknowledges that any and all agreements,
          notices, disclosures, or any other communication satisfies any legal
          requirement. including but not limited to the requirement that such
          communications should be in writing.
        </p>
        <p className="termsOfService__subtitle">E-Commerce & Privacy</p>
        <p className="termsOfService__paragraph">
          The Website www.mebid.com sells pharmacy products and medical
          appointments online. The use of any product of service bought from
          this Website is at the purchaser&apos;s risk. The use of any product
          of service bought from this Website is at the purchaser&apos;s risk.
          The purchaser/user indemnifies and holds the Provider harmless against
          any loss, injury or damages which may be sustained as a result of
          using the products sold on the Website.
          <br />
          The private information required for executing the orders placed
          throught the e-commerce facility, namely the User&apos;s personal
          information and credit card details, delivery address and telephone
          numbers will be kept in the strictest confidence by the Provider and
          not sold or made known to third parties. Only the necessary
          information, that is the delivery address and contact phone number
          will be made known to third parties delivering the product. Credit
          card details are not kept by the Provider under any circumstances.
          <br />
          The Provider cannot be held responsible for security breaches
          occurring on the User&apos;s electronic device (Personal Computer or
          other electronic device used to browse the Website), which may result
          due to the lack of adequate virus protection software or spyware that
          the User may inadvertently have installed on his/her device.
          <br />
          The Provider will supply all goods to the delivery company in good
          order. The Provider will not be held liable for the condition of goods
          arriving at the User&apos;s chosen delivery address.
        </p>
        <div className="termsOfService__agree">
          <h4 className="termsOfService__agree--title">
            Agree to the <span>Terms of Service</span> and I read the Privacy
            Notice.
          </h4>
          <button
            className="termsOfService__btn"
            type="submit"
            onClick={() => dispatch(closeModal())}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
