import React from "react";
import SpecialHeading from "../SpecialHeading/SpecialHeading";
import StatisticComponent from "../StatisticComponent/StatisticComponent";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";

export default function AboutPageSection({ team, history, vision, aboutImg, aboutParg, heading, headingTitle }) {
    const teamMember = [
        {id:1 ,memberName:'tony williamson',jobTitle:'founder',memberImg:'./src/assets/images/TeamMember/team_1.png'},
        {id:2 ,memberName:'william hanah',jobTitle:'ceo',memberImg:'./src/assets/images/TeamMember/team_2.png'},
        {id:3 ,memberName:'jInglo jelian',jobTitle:'advisor',memberImg:'./src/assets/images/TeamMember/team_3.png'},
        {id:4 ,memberName:'jony smith',jobTitle:' designer',memberImg:'./src/assets/images/TeamMember/team_4.png'},
        {id:5 ,memberName:'tony williamson',jobTitle:'founder',memberImg:'./src/assets/images/TeamMember/team_5.png'},
        {id:6 ,memberName:'william hanah',jobTitle:' ceo',memberImg:'./src/assets/images/TeamMember/team_6.png'},
        {id:7 ,memberName:'jInglo jelian',jobTitle:'advisor',memberImg:'./src/assets/images/TeamMember/team_7.png'},
    ]
    if (team)
        return (
            <section className="team-members-section">
                <div className="container container-team">
                    <SpecialHeading heading={heading} title={headingTitle} />
                    <div className="team-members">
                        {teamMember.map((member)=><TeamMemberCard key={member.id} memberImg={member.memberImg} memberName={member.memberName} memberJobTitle={member.jobTitle} />)}
                        
                    </div>
                </div>
            </section>
        );
    return (
        <section className={`${(vision && "special-story") || "our-story"}`}>
            <div className={`container ${vision && "container-vision"}`}>
                <div className="about-page-content">
                    <SpecialHeading heading={heading} title={headingTitle} />
                    <p>{aboutParg}</p>
                    {history && (
                        <div className="statistic-container">
                            <StatisticComponent statistic="12" title="Years Experience" />
                            <StatisticComponent statistic="20K" title="Happy Customers" />
                            <StatisticComponent statistic="100%" title="Clients Satisfaction" />
                        </div>
                    )}
                    {vision && (
                        <div className="vision-content">
                            <span>Credibly innovate granular internal</span>
                            <span>Grantedly underconstructions reloaded</span>
                            <span>Interactively procrastinate high-payoff</span>
                            <span>Completely synergize resource taxing relationships</span>
                        </div>
                    )}
                </div>
                <div className="about-page-image">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </section>
    );
}
