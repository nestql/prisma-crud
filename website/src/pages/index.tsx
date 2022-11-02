import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import HomepageFeatures from "../components/HomepageFeatures";
import HomepageHeader from "../components/HomepageHeader";
import VideoIntroduction from "../components/VideoIntroduction";

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home page" description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <VideoIntroduction />
      </main>
    </Layout>
  );
};

export default Home;
