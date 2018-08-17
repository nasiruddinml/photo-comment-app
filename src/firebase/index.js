import * as firebase from 'firebase'
import 'firebase/firestore'

import { config } from "./config";

firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

export const db = firestore.collection('photo_comments_app').doc('o9xGrUcrRPfVHaS0uOZ2');

export const auth = firebase.auth();
