import { useEffect, useState, type FC } from "react";

type Props = Partial<HTMLInputElement> & {
  onSearch?: (value: string) => void;
};

const Input: FC<Props> = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value.trim());
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  useEffect(() => {
    if (debouncedValue.length < 3) {
      return;
    }

    onSearch?.(debouncedValue);
  }, [onSearch, debouncedValue]);

  return (
    <div className="moon-form-group">
      <input
        id="movie-search"
        className="moon-input"
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <div className="moon-form-hint">Type at least 3 characters to search</div>
    </div>
  );
};

export default Input;
