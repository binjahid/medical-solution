import React from "react";
import Banner from "../../Banner/Banner";
import HomeAppoinment from "../../HomeAppoinment/HomeAppoinment";
import HomePageSevices from "../../HomePageServices/HomePageSevices";
import Team from "../../Team/Team";
import TeamMembers from "../../TeamMembers/TeamMembers";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeAppoinment></HomeAppoinment>
      <Team></Team>
      <TeamMembers></TeamMembers>
      <HomePageSevices></HomePageSevices>
    </div>
  );
};

export default Home;
