export interface Skill {
  name: string;
  variants: Array<SkillVariant>;
}

export interface SkillVariant {
  level: number;
  effect: SkillEffect;
}

export interface SkillEffect {
  atkCount: number;
  dmgOfAtk?: number;
}

export const SKILLS: Array<Skill> = [];

SKILLS.push({
  name: 'Kunai',
  variants: [
    {
      level: 1,
      effect: {
        atkCount: 1,
        dmgOfAtk: 1.95,
      },
    },
    {
      level: 2,
      effect: {
        atkCount: 2,
        dmgOfAtk: 2.6,
      },
    },
    {
      level: 3,
      effect: {
        atkCount: 3,
        dmgOfAtk: 3.9,
      },
    },
    {
      level: 4,
      effect: {
        atkCount: 4,
        dmgOfAtk: 5.2,
      },
    },
    {
      level: 5,
      effect: {
        atkCount: 5,
        dmgOfAtk: 7.31,
      },
    },
  ],
});
