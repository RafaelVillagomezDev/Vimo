import * as S from './styles/StatusDataStyle';

interface Step {
    id: number;
    text: string;
}

function StatusData({ steps = [], activeStep = 1 }: { steps?: Step[]; activeStep?: number }) {
    return (
       <S.StatusDataContainer>
          {steps.map((step) => {
             const isCompleted = activeStep > step.id;
             const isActive = activeStep === step.id;

             return (
                <S.StepBox 
                    key={step.id} 
                    $active={isActive} 
                    $completed={isCompleted}
                >
                   <S.StepNumber $active={isActive} $completed={isCompleted}>
                      {isCompleted ? '✓' : step.id}
                   </S.StepNumber>
                   <S.StepText $active={isActive} $completed={isCompleted}>
                      {step.text}
                   </S.StepText>
                </S.StepBox>
             );
          })}
       </S.StatusDataContainer>
    );
}

export default StatusData;