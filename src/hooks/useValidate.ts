import { useEffect, useState } from "react";
import { romanMap } from "../utils/romanToNumber";

interface UseValidate {
  roman: string;
}

export const useValidate = ({ roman }: UseValidate) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (roman === "") {
      setErrorMessage("");
      return;
    }

    const romanChars = roman.split("");
    const invalidChars = romanChars.some((char) => !romanMap.has(char));
    setErrorMessage(
      invalidChars ? "You can use only I, V, X, L, C, D, M" : undefined
    );
  }, [roman]);

  return errorMessage;
};
