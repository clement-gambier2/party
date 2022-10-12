import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: 'AIzaSyBWgr151Y4-tjqkjPoLLs-FsVCCteZfp3c',
  authDomain: 'party-f0028.firebaseapp.com',
  projectId: 'party-f0028',
  storageBucket: 'party-f0028.appspot.com',
  messagingSenderId: '829865723048',
  appId: '1:829865723048:web:1a295ae1d1f5d6c78b6e9d',
  measurementId: 'G-R170TQZFWX'
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('user')

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
