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
               12 mins ago
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
    card: {
        width: 320,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
        
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
        
    },
    CardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
        
    },
    CardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    CardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    CardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    CardDesc: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    CardFooter: {
        color: '#000000'
    }
})