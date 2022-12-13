import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your dedicated NFT bidding Platform. Start selling & and buying your NFTs"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million peopleusing ProNef MarketPlace"
        showBtn
        mockupImage={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="smart User Interface  Marketplace"
        description="Experience a buttery UI of pronef NFT Marketplace. smooth constant colors of a fluent UI design "
        mockupImage={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="Pronef is build on Expo which runs natively on all user devices. You can get your app into peoples hands"
        mockupImage={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to show case the store"
        description="The App contains two screens.The first lists all screens and the Other shows the details of a specific NFT "
        mockupImage={assets.mockup}
        banner="banner02"
      />
      <Download/>
      <div className="px-4 py-2 justify-center items-center bg-primary  flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with Love by {" "}
        <span className="bold">
        PaulRuby
        </span></p>
      </div>
    </>
  );
};

export default App;
