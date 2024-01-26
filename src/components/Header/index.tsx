export const Header = () => {
  return (
    <header className="w-full flex justify-center mt-6">
      <div className="w-[90%] md:w-[500px]">
        <h1 className="text-xl md:text-2xl font-mono text-sky-700 flex items-center justify-center">
          Roman To Number
        </h1>
        <p className="text-xs mt-4">
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
      </div>
    </header>
  );
};
