// anything going in or out of the voting poll api in react store node api should go here
import { CURRENT_API } from "@env";
// get voting polls from api using poll type and category
export let getVotingPollUsingTypeAndCategory = async (
  pollType,
  pollCategory
) => {
  return fetch(
    `${CURRENT_API}/votingPolls/pollsByTypeAndCategory/${pollType}/${pollCategory}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
      console.log(data);
      // sets the data from database to inventory items
      //   setPollsFromServer(data);
    });
};

// create a new voting poll
export let createNewVotingPoll = async (
  pollType,
  pollCategory,
  pollId,
  pollPosterUserId,
  pollPosterUserUsername,
  pollTitle,
  requiredPollAnswersToEnd,
  singleQuestionPollQuestion,
  singleQuestionPollAnswerChoices,
  multipleQuestionPollQuestions,
  multipleQuestionPollAnswerChoices
) => {
  const newPoll = {
    pollType: pollType,
    pollCategory: pollCategory,
    pollId: pollId,
    pollPosterUserId: pollPosterUserId,
    pollPosterUserUsername: pollPosterUserUsername,
    pollTitle: pollTitle,
    requiredPollAnswersToEnd: requiredPollAnswersToEnd,
    singleQuestionPollQuestion: singleQuestionPollQuestion,
    singleQuestionPollAnswerChoices: singleQuestionPollAnswerChoices,
    multipleQuestionPollQuestions: multipleQuestionPollQuestions,
    multipleQuestionPollAnswerChoices: multipleQuestionPollAnswerChoices,
  };

  return await fetch(`${CURRENT_API}/votingPolls/createNewVotingPoll`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPoll),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
      console.log(data);
      // sets the data from database to inventory items
      //   setPollsFromServer(data);
    });
};
