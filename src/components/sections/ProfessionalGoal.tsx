import type { ProfessionalGoal as ProfessionalGoalType } from '../../types';
import Section from '../ui/Section';
import './ProfessionalGoal.css';

interface ProfessionalGoalProps {
  goal: ProfessionalGoalType;
}


const ProfessionalGoal = ({ goal }: ProfessionalGoalProps) => {
  return (
    <Section title={goal.title} id="section-goal" className="professional-goal">
      <p className="professional-goal__description">{goal.description}</p>
    </Section>
  );
};

export default ProfessionalGoal;
