import { Choice, LocalStorage, Quiz } from '@/types';

const prefix = 'triviaQuiz';
const property = {
  startTime: 'startTime',
  finishTime: 'finishTime',
  quizzes: 'quizzes',
  quizIndex: 'quizIndex',
  correctQuestions: 'correctQuestions',
  incorrectQuestions: 'incorrectQuestions',
  records: 'records',
};

function set<T = any>(key: string, value: T): void {
  window.localStorage.setItem(
    `${prefix}:${key}`,
    typeof value === 'string' ? value : JSON.stringify(value)
  );
}

function get<T = any>(key: string, fallbackValue?: T): T {
  const value = window.localStorage.getItem(`${prefix}:${key}`);
  if (value === null || value === undefined) {
    return fallbackValue as T;
  }

  return JSON.parse(value) as T;
}

function remove(key: string): void {
  window.localStorage.removeItem(`${prefix}:${key}`);
}

export const localStorage: LocalStorage = {
  get startTime(): number {
    return get<number>(property.startTime);
  },
  setStartTime(startTime: number) {
    set<number>(property.startTime, startTime);
  },

  get finishTime(): number {
    return get<number>(property.finishTime);
  },
  setFinishTime(finishTime: number) {
    set<number>(property.finishTime, finishTime);
  },

  get quizzes(): Quiz[] {
    return get<Quiz[]>(property.quizzes, []);
  },
  setQuizzes(quizzes: Quiz[]) {
    set<Quiz[]>(property.quizzes, quizzes);
  },

  get quizIndex(): number {
    return get<number>(property.quizIndex, -1);
  },
  setQuizIndex(quizIndex: number) {
    set<number>(property.quizIndex, quizIndex);
  },

  get correctQuestions(): number {
    return get(property.correctQuestions, 0);
  },
  addCorrectQuestion() {
    set<number>(property.correctQuestions, this.correctQuestions + 1);
  },

  get incorrectQuestions(): number {
    return get<number>(property.incorrectQuestions, 0);
  },
  addIncorrectQuestion() {
    set<number>(property.incorrectQuestions, this.incorrectQuestions + 1);
  },

  get records(): Choice[] {
    return get<Choice[]>(property.records, []);
  },
  addRecord(record: Choice) {
    const newRecords: Choice[] = structuredClone(this.records);
    newRecords.push(record);
    set<Choice[]>(property.records, newRecords);
  },

  init() {
    Object.values(property).forEach((key: string) => remove(key));
  },
};
