export default function Checkbox({ id, name, label, checked, setValue }) {
  return (
    <div className="flex flex-col my-2">
      <p className="text-xs text-gray-500" style={{ fontSize: "0.65rem" }}>
        {name.toUpperCase()}
      </p>
      <div className="flex items-center mt-1/2">
        <input
          type="checkbox"
          checked={checked}
          onChange={({ target: { checked } }) => setValue({ [name]: checked })}
          name={name}
          id={id}
          className="mr-2"
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
}
