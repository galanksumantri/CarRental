import { ScrollView, View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Logo2, JSONCarList, JSONCategoryList, } from '../../assets'
import Card from '../../components/Card'
import {ButtonIcon, List, Header} from '../../components'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.bungkus}>
          <Text style={styles.text1}>Hi, Galang</Text>
          <Text style={styles.text2}>Your Location</Text>
        </View>
        <Card />
      {/* <View style={styles.container}>
        <View style={styles.card}>
          <ImageBackground resizeMode='cover' source={Logo2} style={styles.logo}> 
           
              <Text style={styles.text3}>Sewa Mobil Berkualitas</Text>
              <Text style={styles.text4}>di kawasanmu</Text>
           
              <Text style={styles.text5}>Sewa Mobil</Text>
            
          </ImageBackground>
        </View>
      </View> */}
      </View>
      <View style={styles.body}>
          <View style={styles.iconLayanan}>
            {JSONCategoryList.data.map(item => {
              return (
                <View key={item.id}>
                  <ButtonIcon title={item.title} />
                </View>
              );
            })}
          </View>
          <View>
            <Text style={styles.titleLayananDaftarMobil}>
              Daftar Mobil Pilihan
            </Text>
            {JSONCarList.data.map(item => {
              return (
                <View key={item.id}>
                  <List
                    name={item.name}
                    briefCase={item.briefCase}
                    user={item.user}
                    source={Logo2} // Cara untuk mengambil foto dari JSON file, masih belum ketemu
                    harga={item.harga}
                  />
                </View>
              );
            })}
          </View>
        </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  // container: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
    
  // },
  card: {
    width: '90%',
    height: '45%',
    // backgroundColor: 'green',
    // flexDirection: 'row',
    borderRadius: 20,
    overflow: 'hidden',
  },
  logo: {
    overflow: 'hidden',
    flex: 1,
    // height: '100%',
    justifyContent: 'center',
    // width: '80%',
    // flexDirection: 'column-reverse',
    // alignSelf: 'flex-end',
    // backgroundColor: 'yellow'
  },
  content: {
    overflow: 'hidden',
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row'
  },
  text : {
    color: '#fff',
    overflow: 'hidden',
    fontFamily: 'Helvetica',
    backgroundColor: '#091B6F',
    paddingTop: 24,
    paddingLeft: 24
  },
  text1 : {
    color: '#000',
    fontFamily: 'Helvetica',
    // textAlign: 'left',
    paddingLeft: "5%",
    paddingTop: '5%'  
  },
  text2 : {
    color: '#000',
    fontFamily: 'Helvetica',
    // textAlign: 'left',
    paddingLeft: "5%",
    fontWeight: 'bold',
    fontSize: 16
    // paddingTop: '5%'
  },
  text3 : {
    fontFamily: 'Helvetica',
    // textAlign: 'left',
    paddingLeft: "5%",
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white'
    // paddingTop: '5%'
  },
  text4 : {
    fontFamily: 'Helvetica',
    // textAlign: 'left',
    paddingLeft: "5%",
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white'
    // paddingTop: '5%'
  },
  text5 : {
    color: '#fff',
    fontFamily: 'Helvetica',
    // textAlign: 'left',
    paddingLeft: "5%",
    fontWeight: 'bold',
    fontSize: 16
    // paddingTop: '5%'
  },
  bungkus : {
    justifyContent: 'flex-start',
    backgroundColor: 'yellow',
    height: "50%"
  },
  // apani: {
  //   flexDirection: 'column',
  //   backgroundColor: 'yellow'
  // },
  // text2: {
  //   backgroundColor: 'green',
  //   width: '45%'
  // }
})