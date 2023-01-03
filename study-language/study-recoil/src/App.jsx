import {
  atom,
  RecoilRoot,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

// atom
const textState = atom({
  key: "textState",
  default: "",
});

const CharacterCounter = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};

// atom에서 파생된 state
const charCountState = selector({
  key: "charCounteState", // unique id
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);
  return <>Character Count : {count}</>;
};

// useRecoilState를 사용해 atom을 읽고 쓴다.
const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};

export default App;
