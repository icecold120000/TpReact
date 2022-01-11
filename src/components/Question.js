import React from 'react';
import Answer from './Answer';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      questions: [{ id: 1, titre: 'Quel temps fait-il ?', points: 1 }],
      answers: [
        { id: 1, text: 'Soleil', correctAnswer: true },
        { id: 2, text: 'Pluie', correctAnswer: false },
        { id: 3, text: 'Neige', correctAnswer: false },
        { id: 4, text: 'Brouillard', correctAnswer: false },
      ],
    };
  }

  handleUpdate(id, newItem) {
    if (newItem.correctAnswer === true) {
      this.state.score = this.state.score + 1;
    }
    this.setState((oldState) => ({
      answers: oldState.answers.map((item) => {
        if (item.id === id) {
          return newItem;
        }
        return item;
      }),
    }));
  }

  render() {
    return (
      <>
        <h2>
          Votre score : {this.state.score}/{this.state.questions.length}
        </h2>
        <h2>{this.state.questions.map((item) => item.titre)}</h2>
        <ul>
          {this.state.answers.map((itemAnswer) => (
            <Answer
              data={itemAnswer}
              onCheck={(newItem) => this.handleUpdate(itemAnswer.id, newItem)}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Question;
