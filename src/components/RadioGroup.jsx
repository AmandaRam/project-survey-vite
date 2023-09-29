const RadioGroup = ({
    name,
    value,
    onChange,
    options,
}) => {
    // Maping the options in our option list.
    return (
        <>
            {options.map((option) => (
                <span key={option}>
                    <input
                        type="radio"
                        name={name}
                        value={option}
                        onChange={onChange}
                        checked={value === option}
                    />
                    <label>{option}</label>
                </span>
            ))}
        </>
    );
}

export default RadioGroup;