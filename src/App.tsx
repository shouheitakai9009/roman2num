import { useState } from "react";
import { TextInput } from "./components/TextInput";
import { useValidate } from "./hooks/useValidate";
import { romanToNumber } from "./utils/romanToNumber";

function App() {
  const [roman, setRoman] = useState<string>("");
  const errorMessage = useValidate({ roman });

  return (
    <article className="h-full flex justify-center items-center">
      <main className="w-[1080px] sm:w-full px-4 flex flex-col justify-center items-center">
        <img src="/icon.webp" className="w-56" />
        <h1 className="text-3xl md:text-3xl font-mono tracking-tighter my-2">
          Roman To Number
        </h1>
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
      </main>
    </article>
  );
}

export default App;
