import React from "react";
import assets from "../assets";
import styles from "../styles/Global";

const FeatureCard = ({ iconText, iconUrl }) => (
  <div className={`${styles.featureCard}`}>
    <img src={iconUrl} alt="icon " className={styles.img} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div className="">
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            Pronef has been developed on a cross-platform technology, React
            Native,
          </p>
        </div>
        <div className={`${styles.flexWrap}`}>
          <FeatureCard iconText="React Native" iconUrl={assets.react} />
          <FeatureCard iconText="Javascript" iconUrl={assets.javascript} />
        </div>
      </div>
    </div>
  );
};

export default Features;
