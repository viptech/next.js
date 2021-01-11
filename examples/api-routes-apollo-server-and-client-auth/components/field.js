export default function Field({ name, label, type, autoComplete, required }) {
  const inputName = [name, 'input'].join('-');
  const labelName = [name, 'label'].join('-');
  return (
    <div>
      <label id={labelName} htmlFor={inputName}>
        {label} {required ? <span title="Required">*</span> : undefined}
      </label>
      <br />
      <input
        autoComplete={autoComplete}
        id={inputName}
        name={name}
        required={required}
        type={type}
      />
    </div>
  )
}
