function FormInput({ label, name, type, onChange, required }) {
  return (
    <div>
      <label htmlFor={name}>
        {label} {required && <span>*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;