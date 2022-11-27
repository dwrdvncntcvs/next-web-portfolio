export interface Skill {
  id: string;
  description: string;
  soft: SoftSkill[];
  technical: TechnicalSkill[];
}

interface SoftSkill {
  icon: string;
  description: string;
  title: string;
}

interface TechnicalSkill {
  title: string;
  icon: string;
}
