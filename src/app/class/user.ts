export class User {
  displayName: string | null;
  email: string;
  photoURL: string;
  uid: string;
  initial: string;

  constructor(user: User | firebase.User){
    this.uid = user.uid;
    this.displayName = user.displayName;
    this.email = user.email;
    this.photoURL = user.photoURL || null;
    if(this.displayName !== null) {
      this.initial = this.displayName.slice(0, 1);
    }
  }
}
