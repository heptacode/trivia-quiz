const prefix = 'triviaQuiz';
const property = {
  startTime: 'startTime',
  finishTime: 'finishTime',
  quizIndex: 'quizIndex',
  correctQuestions: 'correctQuestions',
  incorrectQuestions: 'incorrectQuestions',
};

export class LocalStorage {
  static get startTime(): Date {
    const time = window.localStorage.getItem(`${prefix}:${property.startTime}`) || '';
    return new Date(time);
  }
  static setStartTime() {
    window.localStorage.setItem(`${prefix}:${property.startTime}`, new Date().toISOString());
  }

  static get finishTime(): Date {
    const time = window.localStorage.getItem(`${prefix}:${property.finishTime}`) || '';
    return new Date(time);
  }
  static setFinishTime() {
    window.localStorage.setItem(`${prefix}:${property.finishTime}`, new Date().toISOString());
  }

  static get quizIndex(): number {
    return Number(window.localStorage.getItem(`${prefix}:${property.quizIndex}`) || -1);
  }
  static setQuizIndex(quizIndex: number) {
    window.localStorage.setItem(`${prefix}:${property.quizIndex}`, String(quizIndex));
  }

  static get correctQuestions(): number {
    return Number(window.localStorage.getItem(`${prefix}:${property.correctQuestions}`) || 0);
  }
  static addCorrectQuestions() {
    window.localStorage.setItem(
      `${prefix}:${property.correctQuestions}`,
      String(this.correctQuestions + 1)
    );
  }

  static get incorrectQuestions(): number {
    return Number(window.localStorage.getItem(`${prefix}:${property.incorrectQuestions}`) || 0);
  }
  static addIncorrectQuestions() {
    window.localStorage.setItem(
      `${prefix}:${property.incorrectQuestions}`,
      String(this.incorrectQuestions + 1)
    );
  }

  static init() {
    window.localStorage.removeItem(`${prefix}:${property.startTime}`);
    window.localStorage.removeItem(`${prefix}:${property.finishTime}`);
    window.localStorage.removeItem(`${prefix}:${property.quizIndex}`);
    window.localStorage.removeItem(`${prefix}:${property.correctQuestions}`);
    window.localStorage.removeItem(`${prefix}:${property.incorrectQuestions}`);
  }
}
