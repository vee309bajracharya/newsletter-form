import iconSuccess from "../assets/images/icon-success.svg";
import PropTypes from "prop-types";
const Success = ({ email }) => {
  return (
    <section className="bg-backgroundColor w-full h-dvh flex justify-center items-center">
      {/* form container */}
      <section className="bg-white rounded-2xl flex justify-between items-center p-6 w-[26rem]">
        {/* contents */}
        <div className="inline-block p-6">
          <img src={iconSuccess} alt="success-icon" />
          <h1 className="text-5xl font-bold text-primary my-4">Thanks for subscribing!</h1>
          <p className="my-6 font-primary">
                A confirmation email has been sent to{" "}
                <span className="font-bold">{email}</span>. Please open it and click the button inside to confirm your subscription.
            </p>
          <button 
            type="submit" 
            className="btnPrimary"
            onClick={()=> window.location.reload()}>
            Dismiss message
          </button>
        </div>
      </section>
    </section>
  );
};

Success.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Success;
