import { atom } from "nanostores";
import { StudentBoard } from "utils/types";

export const studentBoardStore = atom<StudentBoard>({
  schools: [],
  forms: [],
  students: [],
});

export const setStudentBoard = (newBoard: StudentBoard) => {
  studentBoardStore.set(newBoard);
};
