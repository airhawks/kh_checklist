import { Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { AllSteps } from "../stepsConstants";
import AllQuestions from "./AllQuestions";
import PageHeader from "./PageHeader";
import { useTheme } from "@mui/material/styles";

function MainSectionText({ text }) {
  const theme = useTheme();

  return (
    <>
      <Typography
        sx={{
          p: 1,
          color: theme.palette.primary.contrastText,
          bgcolor: theme.palette.primary.light,
        }}
        variant="h6"
        component="div"
      >
        {text}
      </Typography>
      <Divider sx={{ my: 1 }} />
    </>
  );
}
function SubSectionText({ text }) {
  const theme = useTheme();
  return (
    <Typography
      variant="subtitle1"
      sx={{
        pl: 1,
        color: theme.palette.secondary.contrastText,
        bgcolor: theme.palette.primary.light,
      }}
    >
      {text}
    </Typography>
  );
}
function QuestionText({ text }) {
  return <Typography variant="subtitle2">{text}</Typography>;
}
function AnswerText({ text }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        color: theme.palette.primary.main,
      }}
    >
      {Array.isArray(text) ? (
        <ul style={{ marginTop: 8 }}>
          {text.map((text, index) => (
            <Typography variant="body2" key={index + text}>
              <li>{text}</li>
            </Typography>
          ))}
        </ul>
      ) : (
        <Typography sx={{ ml: 2 }} variant="body2">
          {text}
        </Typography>
      )}
    </Box>
  );
}

function List({ children }) {
  return (
    <Box
      sx={{
        px: 2,
        py: 1,
      }}
    >
      {children}
    </Box>
  );
}
function ListItem({ children }) {
  return (
    <Box
      sx={{
        pl: 2,
        py: 1,
      }}
    >
      {children}
    </Box>
  );
}

function RenderQuestion({ question, data }) {
  return (
    <ListItem>
      <QuestionText text={question} />
      <AnswerText text={data} />
    </ListItem>
  );
}

function RenderQuestionsSection({ questions, data }) {
  return Object.keys(questions).map((questionKey) => {
    const questionText = questions[questionKey];
    return (
      <RenderQuestion
        key={questionKey}
        question={questionText}
        data={data[questionKey]}
      />
    );
  });
}

export default function Summary({
  title = "Summary",
  data,
  roomType,
  isProjectIntake = false,
}) {
  const questions = isProjectIntake
    ? AllQuestions.project
    : AllQuestions.roomsDetail[roomType];

  const Steps = isProjectIntake ? AllSteps.projectIntake : AllSteps[roomType];
  console.log(questions, data, roomType, isProjectIntake);
  return (
    <>
      <PageHeader name={title} />
      <Paper sx={{ w: 1, py: 4, mb: 8 }} elevation={12}>
        <List>
          {Object.keys(questions).map((mainSectionKey) => {
            return (
              <ListItem key={mainSectionKey}>
                <MainSectionText text={Steps[mainSectionKey]} />

                {questions[mainSectionKey]._subSections != null ? (
                  Object.keys(questions[mainSectionKey]._subSections).map(
                    (subSectionKey) => {
                      const subSectionFields =
                        questions[mainSectionKey]._subSections[subSectionKey];
                      return (
                        <ListItem key={subSectionKey}>
                          <Box>
                            <SubSectionText text={subSectionKey} />
                            {subSectionFields.map((subSectionField) => (
                              <RenderQuestion
                                key={subSectionField}
                                question={
                                  questions[mainSectionKey][subSectionField]
                                }
                                data={data[mainSectionKey][subSectionField]}
                              />
                            ))}
                          </Box>
                        </ListItem>
                      );
                    }
                  )
                ) : (
                  <RenderQuestionsSection
                    questions={questions[mainSectionKey]}
                    data={data[mainSectionKey]}
                  />
                )}
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </>
  );
}
