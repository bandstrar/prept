import React, { Component } from 'react';
import questionData from '../../helpers/data/questionData';

class CardForm extends Component {
    state = {
      firebaseKey: this.props.question?.firebaseKey || '',
      question: this.props.question?.question || '',
      answer: this.props.question?.answer || '',
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();

      questionData.createQuestion(this.state)
        .then(() => {
          this.setState({
            question: '',
            answer: '',
          });
        });
    }

    render() {
      return (<form onSubmit={this.handleSubmit}>
          <h1>Card Form</h1>
            <input
            type='text'
            name='question'
            value={this.state.question}
            onChange={this.handleChange}
            placeholder='Flashcard Question'
            className='form-control form-control-lg m-1'
            required
            />
            <input
            type='text'
            name='answer'
            value={this.state.answer}
            onChange={this.handleChange}
            placeholder='Flashcard Answer'
            className='form-control form-control-lg m-1'
            required
            />
            <button>Submit</button>

        </form>);
    }
}

export default CardForm;
