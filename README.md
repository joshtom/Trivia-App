# Trivia Quiz App

This is a quiz app that uses the public Trivia API to generate questions for users. Users can select a quiz category, difficulty level, and number of questions (up to a maximum of 10) before starting the quiz. At the end of the quiz, users can view their score and restart the quiz if they choose.

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/42160061/225847027-f1926237-0a94-4677-903a-b3406c512980.png">

## Getting Started

To get started with this app, follow the steps below:

1. Clone this repository to your local machine using `git clone https://github.com/your-username/trivia-quiz-app.git`.
2. Install the required dependencies by running `yarn install`.
3. Start the app by running `yarn start`.
4. Run `yarn test` to test all instances
5. Navigate to `http://localhost:3000` in your browser to view the app.

## Project Structure

The project is structured using a common React project structure, with files and directories organized in a way that promotes code reusability and maintainability. Below is a breakdown of the directories and their purposes:

- `src/assets`
- `src/components`
- `src/helpers`
- `src/hooks`
- `src/layout`
- `src/pages` 
- `src/routes`
- `src/styles`
- `src/utils` 

By organizing files and directories in this way, the project is kept modular and maintainable, with clearly defined responsibilities for each file and directory.

## Testing

This App was tested using Jest combined with react testing library

Below are the components / hook that was tested

- `components/Button`
- `components/Card`
- `components/Input`
- `components/Quiz`
- `hooks/useFetch`

## Deployment

App is deployed on Netlify and can be accessed [here](https://triviaa-app.netlify.app/)
