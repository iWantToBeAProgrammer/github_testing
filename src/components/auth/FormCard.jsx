const FormCard = ({ action }) => {
  return (
    <>
      <fieldset className="fieldset w-lg bg-base-200 border border-base-300 p-4 pb-12 rounded-box">
        <legend className="fieldset-legend">{action}</legend>

        <label className="fieldset-label">Email</label>
        <input type="email" className="input w-lg" placeholder="Email" />

        <label className="fieldset-label">Password</label>
        <input type="password" className="input w-lg" placeholder="Password" />

        {action === "register" && (
          <div>
            <label className="fieldset-label">Confirm Password</label>
            <input
              type="password"
              className="input w-lg"
              placeholder="Please Confirm Your Password"
            />
          </div>
        )}
        <button className="btn btn-neutral mt-4">{action}</button>
      </fieldset>
    </>
  );
};

export default FormCard;
