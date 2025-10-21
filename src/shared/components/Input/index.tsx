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
    <input
      id="movie-search"
      type="text"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};

export default Input;
