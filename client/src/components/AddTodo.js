import { useState } from 'react';
import '../styles/AddTodo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

const AddTodo = ({ addItem }) => {
  const [todoItem, setTodoItem] = useState({
    title: '',
  });

  const onButtonClick = () => {
    if (!todoItem.title.trim()) {
      // 비어있는 경우
      alert('Text를 입력해주세요');
      return;
    }
    // 1. props addItem 함수 실행
    addItem(todoItem);
    // 2. input 초기화
    setTodoItem({
      title: '',
    });
  };

  const onEnterKeyDown = (e) => {
    if (e.key === 'Enter') {
      onButtonClick();
    }
  };

  return (
    <div className="AddTodo">
      <input type="text" placeholder="Add your new Todo" value={todoItem.title} onChange={(e) => setTodoItem({ title: e.target.value })} onKeyDown={onEnterKeyDown} />
      <button onClick={onButtonClick}>
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
      </button>
    </div>
  );
};

export default AddTodo;
