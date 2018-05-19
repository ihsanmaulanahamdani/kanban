import { initializeApp } from 'firebase'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCk4ybKOPUzJKwbyk0VahhDvLtgp2m1A1g',
  authDomain: 'kanban-js.firebaseapp.com',
  databaseURL: 'https://kanban-js.firebaseio.com',
  projectId: 'kanban-js',
  storageBucket: 'kanban-js.appspot.com',
  messagingSenderId: '531107753114'
})

export const db = firebaseApp.database()
export const ref = db.ref('tasks')
