# Character Catalog

## Demo

[https://alchemy-react-character-catalog.netlify.app/](https://alchemy-react-character-catalog.netlify.app/)

## Get Started

Use [this template](https://github.com/alchemycodelab/react-character-catalog) to get started.

### Learning Objectives

- Use react-testing-library to test components
- Use snapshot testing for presentational components
- Use mock service worker (MSW) to mock out an API in a test

### Description

You're working on building an IMDB clone. You've created a prototype that currently only works for one TV show: Rick & Morty. In its current form, it renders a list of characters, allowing you to click on one to get more details about an individual character. Since this covers the basic core functionality that you'll need for the other shows & movies you plan on adding, you want to make sure this foundation is well tested.

Your objective is to write the tests for this app. No functionality to implement or bugs to fix — you're just writing tests.

### Acceptance Criteria

- Behavior test exists for `CharacterList` which asserts that a list of characters are displayed
- Behavior test exists for `CharacterDetails` which asserts that a single character is displayed
- Snapshot test exists & passes for `Character`
- Snapshot test exists & passes for `Characters`

### Rubric

| Task                            | Points |
| ------------------------------- | ------ |
| `CharacterList` Behavior Test   | 4      |
| `CharacterDetail` Behavior Test | 4      |
| `Character` Snapshot Test       | 1      |
| `Characters` Snapshot Test      | 1      |
