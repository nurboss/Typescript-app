const getStore = () => {
    let notes;
    if(localStorage.getItem('noteApp.notes') === null) {
        notes = [];
    } else{
        notes = JSON.parse(localStorage.getItem('noteApp.notes')  || "");
    }
    return notes;
}
interface input {
    id: number;
    text: string;
  }
const addToLocalStore = (data: input) => {
    const notes = getStore();
    notes.push(data);
    localStorage.setItem('noteApp.notes', JSON.stringify(notes));
}



const removeFromLocalStore = (id: number) => {
    const store = getStore();
    const deleteFLocalStore = store.filter((data: input) => data.id !== id);
    localStorage.setItem('noteApp.notes', JSON.stringify(deleteFLocalStore))
}

export {getStore, addToLocalStore, removeFromLocalStore}