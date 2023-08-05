import { Image, StyleSheet,Text ,View,FlatList, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import  car from '../assets/images/car.png';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import menuOptions from "../assets/menuOptions";



export default function page(){

{/*const {hieght,width}=Dimensions("windows");*/}
    return(

<View style={styles.main}>
<View style={styles.topcontainer}>
<View  >
    <Text style={styles.title}>My Model S</Text>
    <Text style={styles.subtitle}>parked</Text>
    </View>
    <View><Ionicons name="person-circle-outline" size={45} color="white" /></View></View>
    <Image source={car}  style={styles.img} resizeMode="center"/>
    <View style={{flexDirection:'row',justifyContent:"space-evenly",marginTop:10}}>
    <AntDesign name="lock" size={30} color="white" />
    <FontAwesome5 name="fan" size={24} color="white" />
    <MaterialCommunityIcons name="lightning-bolt" size={24} color="white" />
    <AntDesign name="car" size={24} color="white" />
   
    </View>
 <FlatList data={menuOptions} contentContainerStyle={{padding:4,gap:4,marginTop:15}} renderItem={({item})=>
     <View style={{flexDirection:'row',marginTop:10,justifyContent:"space-between",alignItems:"center"}}>
<View style={{flexDirection:'row',gap:10}}>
    <MaterialCommunityIcons name={item.iconName} size={40} color="white" />
    <Text style={styles.title}>{item.name}</Text></View>
   <TouchableOpacity><AntDesign name="right" size={30} color="white" /></TouchableOpacity> 
    </View>} />
   
</View>

    );
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#000000',
       

   },
    title:{
        color:"white",
        fontSize:30,
        fontWeight:"800"
    
    },
    topcontainer:{
        marginTop:20,
        padding:15,
        flexDirection:'row',
        justifyContent:"space-between"
    },
    subtitle:{
        color:'white',


    },
    img:{
        marginTop:10,padding:3,
       height:250,
        width:500,
     
        alignSelf:"center",
       
    }
})