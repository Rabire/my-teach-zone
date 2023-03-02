import { atom } from "nanostores";
import { LessonBoard, StudentBoard } from "utils/types";

export const studentBoardStore = atom<StudentBoard>({
  schools: [],
  forms: [],
  students: [],
});

export const setStudentBoard = (newBoard: StudentBoard) => {
  studentBoardStore.set(newBoard);
};

export const lessonsBoardStore = atom<LessonBoard>({
  lessons: [],
  formations: [],
});

export const setLessonBoard = (newBoard: LessonBoard) => {
  lessonsBoardStore.set(newBoard);
};
