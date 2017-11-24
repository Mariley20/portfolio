import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
export const Skills = () => {
    return (
        <center>
<div id="SkillBox">
        <img src="/URL gambar" alt="Skill Bar Progress" />
  <div className="SkillBar">
    <div id="Skill-HTML">
      <span className="Skill-Area ">HTML</span>
      <span className="PercentText ">100%</span>
    </div>
  </div>
   
  <div className="SkillBar">
    <div id="Skill-CSS">
      <span className="Skill-Area ">CSS/CSS3</span>
      <span className="PercentText ">70%</span>
    </div>
  </div>
 
  <div className="SkillBar">
    <div id="Skill-jQuery">
      <span className="Skill-Area ">jQuery</span>
      <span className="PercentText ">40%</span>
    </div>
  </div>
   
  <div className="SkillBar">
    <div id="Skill-JS">
      <span className="Skill-Area ">Javascript</span>
      <span className="PercentText ">65%</span>
    </div>
  </div>
    
    <div className="SkillBar">
    <div id="Skill-JAVA">
      <span className="Skill-Area ">JAVA </span>
      <span className="PercentText ">25%</span>
    </div>
  </div>
   
    <div className="SkillBar">
    <div id="Skill-PHP">
      <span className="Skill-Area ">PHP </span>
      <span className="PercentText ">50%</span>
    </div>
  </div>
    
</div>
</center> 
    )
}