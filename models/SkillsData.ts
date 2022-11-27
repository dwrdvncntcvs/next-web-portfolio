export interface Skill {
  id: string;
  description: string;
  soft: SoftSkill[];
  technical: TechnicalSkill[];
}

export interface SoftSkill {
  icon: string;
  description: string;
  title: string;
}

export interface TechnicalSkill {
  title: string;
  icon: string;
}
