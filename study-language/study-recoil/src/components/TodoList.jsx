import { atom, useRecoilValue } from "recoil";

const totoListState = atom({
  key: "todoListState",
  default: [],
});

const TodoList = () => {
  const todoList = useRecoilValue(totoListState);

  return (
    <>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <todoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export { TodoList, totoListState };
