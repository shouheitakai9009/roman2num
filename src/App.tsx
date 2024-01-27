import { useState } from "react";
import { TextInput } from "./components/TextInput";
import { useValidate } from "./hooks/useValidate";
import { romanToNumber } from "./utils/romanToNumber";
import { Header } from "./components/Header";

function App() {
  const [roman, setRoman] = useState<string>("");
  const errorMessage = useValidate({ roman });

  return (
    <article className="h-full overflow-hidden flex justify-center items-center">
      <main className="w-[90%] md:w-[720px] h-full px-4 flex flex-col justify-between md:justify-center gap-6 items-center">
        <Header />
        <section className="flex items-center gap-4 md:flex-row flex-col mt-4">
          <TextInput
            value={roman}
            onChange={(e) => setRoman(e.target.value.toUpperCase())}
            errorMessage={errorMessage}
          />
          <strong className="hidden text-2xl md:block">→</strong>
          <strong className="block text-2xl md:hidden">↓</strong>
          <TextInput
            value={romanToNumber(roman) ?? ""}
            readOnly
            className="w-32"
          />
        </section>
        <p className="text-md tracking-wider mb-6">
          The app allows you to convert Roman to a number.
          <br />
          For example, the output is "6" when you input "VI" because V=5 and
          I=1.
          <br />
          When A left character is less than a right character, two numbers are
          added, when a right character is less than a left character, two
          numbers are subtracted.
          <br />
          All Roman characters are I=1, V=5, X=10, L=50, C=100, D=500, and
          M=1000.
          <br />
        </p>
      </main>
    </article>
  );
}

export default App;
