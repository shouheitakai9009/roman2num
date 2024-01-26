import { useState } from "react";
import { TextInput } from "./components/TextInput";
import { useValidate } from "./hooks/useValidate";
import { romanToNumber } from "./utils/romanToNumber";
import { Header } from "./components/Header";

function App() {
  const [roman, setRoman] = useState<string>("");
  const errorMessage = useValidate({ roman });

  return (
    <article className="h-full overflow-hidden flex flex-col items-center">
      <Header />
      <main className="w-[90%] md:w-[1080px] h-full px-4 flex flex-col justify-center items-center">
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
          <img src="/icon.webp" className="w-36 md:w-56" />
        </section>
      </main>
    </article>
  );
}

export default App;
