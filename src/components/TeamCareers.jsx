import React from 'react';
import { TeamRevealGrid, DHIZAR_TEAM_MEMBERS } from './ui/team-reveal-grid';

export const TeamCareers = ({ id = "team" }) => (
  <section
    id={id}
    className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center bg-transparent px-4 sm:px-8 py-16 sm:py-24 text-white"
  >
    <div className="max-w-[94vw] 2xl:max-w-[1700px] mx-auto px-2 sm:px-8 relative z-10 w-full">
      <TeamRevealGrid
        title="Small team, deeply focused."
        members={DHIZAR_TEAM_MEMBERS}
        defaultStrokeColor="#a71616"
      />
    </div>
  </section>
);

export default TeamCareers;
