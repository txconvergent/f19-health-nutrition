
import firebase from 'react-native-firebase';

export async function getFoods(foodsRetrieved){

var foodList = []

var snapshot = await firebase.firestore()
.collection('Food_Items')
.orderBy('createdAt')
.get()

snapshot.forEach((doc) => {
    foodList.push(doc.data())
});

console.log(foodList);

foodsRetrieved(foodList);
        
}
