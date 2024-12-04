import Header from './components/Header.js';
import Main from './components/Main.js'
import ThemeSelector from './components/ThemeSelector.js'

const Index = () => {
  return (
    <div className="leading-relaxed text-base font-light rubik-font w-full box-border">
        <Header />
        <Main />
        <ThemeSelector />
    </div>
  );
};

export default Index;