import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FanzyCard() {
  return (
    <View>
      <Text style={styles.headingtext}>FanzyCard</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
            source={{
                uri: 'http://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA18iDWz.img',
            }}
            style={styles.CardImage}
        />
        <View style={styles.CardBody}>
            <Text style={styles.CardTitle}>
                Holi hai!
            </Text>
            <Text style={styles.CardLabel}>
                Festival of Colors
            </Text>
            <Text style={styles.CardDesc}>
            The festival celebrates the feelings of love and pure joy with a chaotic countrywide colored powder fight.
            </Text>
            <Text style={styles.CardFooter}>
               footer
            </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext: {
        fontSize: 30,
        paddingHorizontal: 20,
        fontWeight: 'bold',
    },
    card:{
        width:'95%',
        marginHorizontal: 10,
        borderRadius: 10,
        marginVertical: 2,
        alignItems: 'center',
    },
    cardElevated:{
        elevation: 3,
    },
    CardImage:{

        width: '96%',
        height: 100,
        borderRadius: 10,
    },
    CardBody:{
        paddingHorizontal: 10,
        flexGrow: 1,
        flex: 1,
    },
    CardTitle:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    CardLabel:{

    },
    CardDesc:{
        flexShrink: 1,
    },
    CardFooter:{

    }
})