import React, { useEffect, useReducer } from 'react';
import { API } from 'aws-amplify'; // AppSync 엔드포인트와 통신하기 위해 사용할 그래프QL 클라이언트(fetch or axios와 유사하다).
import { List, Input, Button } from 'antd'; // 리스트를 렌더링할 Ant Design 라이브러리의 UI 컴포넌트
import 'antd/dist/antd.min.css';
import { listNotes } from './graphql/queries'; // 노트 리스트를 가져오는 그래프QL 쿼리 작업.
import { v4 as uuid } from 'uuid';
import { createNote as CreateNote } from './graphql/mutations';
const CLIENT_ID = uuid()

//상태
const initialState = {
  notes: [],
  loading: true,
  error: false,
  form: { name: '', description: '' }
}

//reducer 함수
function reducer(state, action) {
  switch(action.type) {
    case 'SET_NOTES':
      return { ...state, notes: action.notes, loading: false }
    case 'ERROR':
      return { ...state, loading: false, error: true }
    case 'ADD_NOTE':
      return { ...state, notes: [action.note, ...state.notes]}
    case 'RESER_FORM':
      return { ...state, form: initialState.form}
    case 'SET_INPUT':
      return { ...state, form: {...state.form, [action.name]: action.value } }
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  async function fetchNotes() {
    try {
      const notesData = await API.graphql({
        query: listNotes
      })
      dispatch({ type: 'SET_NOTES', notes: notesData.data.listNotes.items })
    } catch (err) {
      console.log('error: ', err)
      dispatch({ type: 'ERROR' })
    }
  }

  async function createNote() {
    const { form } = state;
    if(!form.name || !form.description) {
      return alert('please enter a name and description')
    }
    const note = { ...form, clientId: CLIENT_ID, completed: false, id: uuid() }
    dispatch({ type: 'ADD_NOTE', note })
    dispatch({ type: 'RESET_FORM' })
    try {
      await API.graphql({
        query: CreateNote,
        variables: { input: note }
      })
      console.log('successfully created note!')
    } catch (err) {
      console.log('error: ', err)
    }
  }

  function onChange(e) {
    dispatch({ type: 'SET_INPUT', name: e.target.name, value: e.target.value })
  }

  function renderItem(item) {
    return (
      <List.Item style={styles.item}>
        <List.Item.Meta
          title={item.name}
          description={item.description}
        />
      </List.Item>
    )
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <div style={styles.container}>
      <Input
        onChange={onChange}
        value={state.form.name}
        placeholder="Note Name"
        name="name"
        style={styles.input}
      />
      <Input
        onChange={onChange}
        value={state.form.description}
        placeholder="Note description"
        name="description"
        style={styles.input}
      />
      <Button
        onClick={createNote}
        type="primary"
      >Create Note</Button>
      <List
        loading={state.loading}
        dataSource={state.notes}
        renderItem={renderItem}
      />
    </div>
  )
}

const styles = {
  container: { padding: 20 },
  input: { marginBottom: 10 },
  item: { textAlign: 'left' },
  p: { color: '#1890ff' }
}