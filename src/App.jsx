import iconSuccess from "./assets/images/icon-success.svg";
import { useFormik } from "formik";
import { YupValidation } from "./components/YupValidation";
import Success from "./components/Success";
import { useState } from "react";
import signup1 from './assets/images/sign-up-desktop.svg';
import signup2 from './assets/images/sign-up-mobile.svg';

// defining custom function for initial value
const initialValues = {
  email: "",
};

const App = () => {

  //form submission tracking
  const [isSubmitted, setIsSubmitted] = useState(false);

  //tracking submitted email
  const [submittedEmail, setSubmittedEmail] = useState('');


  // array of object for details text
  const details = [
    {
      id: 1,
      iconPath: iconSuccess,
      text: "Product discovery and building what matters",
    },
    {
      id: 2,
      iconPath: iconSuccess,
      text: "Measuring to ensure updates are a success",
    },
    {
      id: 3,
      iconPath: iconSuccess,
      text: "And much more!",
    },
  ];

  //email validation
  const {
    values,
    errors,
    handleBlur,
    handleSubmit,
    handleReset,
    handleChange,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: YupValidation,
    onSubmit: (values) => {
      setSubmittedEmail(values.email);
      setIsSubmitted(true);
    },
  });

  //render success compo , if submitted
  if(isSubmitted){
    return <Success email={submittedEmail} />
  }

  return (
    <section className="bg-backgroundColor w-full h-dvh flex justify-center items-center">
      {/* form container */}
      <section className="bg-white rounded-2xl flex justify-between items-center flex-col-reverse lg:flex-row">
        {/* content left */}
        <div className="xs:p-5 sm:p-8 lg:pl-16 w-full lg:w-1/2">
          {/* details */}
          <h1 className="text-primary font-bold xs:text-4xl lg:text-5xl">
            Stay updated!
          </h1>
          <p className="my-7 font-primary xs:text-[15px] sm:text-[20px] text-charcoalGray">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          {details.map((info) => (
            <div key={info.id} className="mt-3">
              <p>
                <img
                  src={info.iconPath}
                  alt="success-icon"
                  className="inline-block h-4 mr-3"
                />
                <span className="font-primary xs:text-[13px] sm:text-[20px] text-charcoalGray">{info.text}</span>
              </p>
            </div>
          ))}

          {/* form */}

          <section className="mt-8">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="font-bold font-primary flex justify-between items-center">
                Email address
                {errors.email && touched.email ? (
                  <span className="showError">{errors.email}</span>
                ) : null}
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@company.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                className={`border-2 text-primary py-3 px-5 mt-4 rounded-md w-full
                ${
                  errors.email && touched.email
                    ? "bg-placeholderError border-error text-error"
                    : "bg-white"
                }`}
              />

              <button
                type="submit"
                className="btnPrimary"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </section>
        </div>

        {/* content right */}
        <div className="xs:hidden lg:inline-flex pr-4 py-4">
          <img src={signup1} alt="signup-img" />
        </div>

        {/* mobile-img */}
        <div className="lg:hidden w-full">
            <img src={signup2} alt="signup-img" className="w-full xs:rounded-sm md:rounded-tl-2xl md:rounded-tr-2xl" />
        </div>
      </section>
    </section>
  );
};

export default App;
