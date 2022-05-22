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
  static setStartTime(time: Date) {
    window.localStorage.setItem(`${prefix}:${property.startTime}`, time.toISOString());
  }

  static get finishTime(): Date {
    const time = window.localStorage.getItem(`${prefix}:${property.finishTime}`) || '';
    return new Date(time);
  }
  static setFinishTime(time: Date) {
    window.localStorage.setItem(`${prefix}:${property.finishTime}`, time.toISOString());
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
  static setCorrectQuestions(correctQuestions: number) {
    window.localStorage.setItem(`${prefix}:${property.correctQuestions}`, String(correctQuestions));
  }

  static get incorrectQuestions(): number {
    return Number(window.localStorage.getItem(`${prefix}:${property.incorrectQuestions}`) || 0);
  }
  static setIncorrectQuestions(incorrectQuestions: number) {
    window.localStorage.setItem(
      `${prefix}:${property.incorrectQuestions}`,
      String(incorrectQuestions)
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
