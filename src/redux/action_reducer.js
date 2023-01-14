export const ADD_NOTE = 'ADD_NOTE';
export const ADD_NOTE_DESCRIPTION = 'ADD_NOTE_DESCRIPTION';

export const EDIT_NOTE_DESCRIPTION = 'EDIT_NOTE_DESCRIPTION';

let titleID = 0;

export function addnote(title) {
  return {
    type: ADD_NOTE,
    id: titleID++,
    title,
  };
}

let desID = 0;
export function addDescription(description,noteTitle) {
  return {
    type: ADD_NOTE_DESCRIPTION,
    id: desID++,
    description,
    noteTitle
  };
}

// export function editDescription(editedDescription,noteTitle) {
//   return {
//     type: EDIT_NOTE_DESCRIPTION,
//     editedDescription,
//     noteTitle
//   };
// }

const initialState = [];

function notesReducer(state = initialState, action) {
  {console.log("Action.js",action)}
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          
        },
      ];
    case ADD_NOTE_DESCRIPTION:
      return [
        ...state,
        {
          id: action.id,
          description: action.description,
          titleNote:action.noteTitle
        },
      ];

    default:
      return state;
  }
}

export default notesReducer;
