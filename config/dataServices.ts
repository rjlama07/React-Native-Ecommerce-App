import { db, auth } from "./firebaseConfig";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const getProductsData = async () => {
  try {
    const quesrySnapshot = await getDocs(collection(db, "products"));
    const list = [];
    quesrySnapshot.forEach((doc) => {
      list.push(doc.data());
    });
    return list;
  } catch (error) {
    console.error("Error fething products data", error);
  }
};

export const getUserOrders = async () => {
  try {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const uid = currentUser.uid;
      const userOrdersRef = collection(doc(db, "users", uid), "orders");
      const querySnapShot = await getDocs(userOrdersRef);
      const orderList = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return orderList;
    }
  } catch (e) {}
};
