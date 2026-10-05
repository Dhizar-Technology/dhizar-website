import React from 'react';
import { TeamRevealGrid, DHIZAR_TEAM_MEMBERS } from './ui/team-reveal-grid';

export const TeamCareers = () => {
  return (
    <section
      id="team"
      className="py-12 sm:py-20 lg:py-28 relative overflow-hidden bg-[#6b8cc8] text-[#0e1b33] w-full border-b border-[rgba(14,27,51,0.12)]"
    >
      <div className="max-w-[94vw] 2xl:max-w-[1700px] mx-auto px-4 sm:px-8 relative z-10">
        <TeamRevealGrid
          title="Small team, deeply focused."
          description="Building the future of hands-free neural gaming input through focused, multidisciplinary execution."
          members={DHIZAR_TEAM_MEMBERS}
          autoPlay={false}
          defaultActiveMemberId={null}
          defaultStrokeColor="#a71616"
        />
      </div>
    </section>
  );
};

export default TeamCareers;
