import React ,{Component} from 'react';
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import { ListItem } from 'react-native-elements';


export default class swipeableFlatlist extends Component{
constructor(props){
    super(props)
    this.state = {
        allNotifications : this.props.allNotifications()
    }
}
updateMarkAsread = (Notification) =>{
    db.collection('allNotifications').doc(Notification.doc_id).update(){
        notificationStatus : unread
    }
}
    
}
onSwipeValueChange = swipeData =>{
    var allNotifications = this.state.allNotifications
    const {key,value} = swipeData;
if(value < -Dimensions.get('window').width){ 
    const newData = [...allNotifications];
     const prevIndex = allNotifications.findIndex(item => item.key === key); 
     this.updateMarkAsread(allNotifications[prevIndex]); 
     newData.splice(prevIndex, 1); 
     this.setState({allNotifications : newData}) }; 
    };
    renderItem = data =>(
        <ListItem></ListItem>
    )
