import Button from "./Button";

const App = () => {
  return (
    <div>
      <h1>Useful Websites</h1>
      <h3>Which websites do you want to open?</h3>
      <Button name="Google" link="https://google.com" />
      <Button name="Facebook" link="https://facebook.com" />
      <Button name="Youtube" link="https://youtube.com" />
      <br /> {/* Add a line break with comment in curly braces */}
      <Button name="WhatsApp" link="https://wa.me/" />
      <Button name="Github" link="https://github.com" />
      <Button name="Instagram" link="https://instagram.com" />
    </div>
  );
};

export default App;