import fs from "node:fs";
import { cwd } from "node:process";
import { GetStaticProps, NextPage } from "next";

const Home: NextPage = () => {
  return <div></div>;
};

export const getStaticProps: GetStaticProps = async () => {
  console.deep(fs.readdirSync(cwd()));

  return {
    props: {},
  };
};

export default Home;
