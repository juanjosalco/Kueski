import React from 'react'
import {Page, Text, View, Document, StyleSheet} from "@react-pdf/renderer";


const styles = StyleSheet.create({
        pag: {
          fontSize: 12,
          paddingTop: 35,
          paddingBottom: 65,
          paddingHorizontal: 35,
        },
        section: {
          marginBottom: 10,
          fontWeight: 'bold',
          fontSize: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
          padding: 10,
        },
        dataTitle: {
          fontWeight: 'bold',
          marginRight: 10,
          marginBottom: 5,
          color: '#333',
          fontSize: 12,
        },
        data: {
          fontSize: 12,
          marginBottom: 10,
          color: '#333',
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
        },
        column: {
            flex: 1,
            flexDirection: 'column',
            paddingHorizontal: 10,
            
        },
  });
  

function AccesoPDF({user}) {
    return (
        <Document>
            <Page size="A4" >
                <View style = {styles.pag} >
                    <View style={styles.section}>
                    <Text style={{ fontSize: 20, marginBottom: 10 }}>Reporte de Información del usuario</Text>
                     </View>
                    <View style={styles.section}>
                        <Text style={{ fontSize: 18, marginBottom: 10 }}>Información del usuario</Text>

                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.dataTitle}>Nombre:</Text>
                                <Text style={styles.data}>{user.F_NAME}</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.dataTitle}>Primer Apellido:</Text>
                                <Text style={styles.data}>{user.LNAME1}</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.dataTitle}>Segundo Apellido:</Text>
                                <Text style={styles.data}>{user.LNAME2}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                        <View style={styles.column}>
                                <Text style={styles.dataTitle}>Fecha de Nacimiento:</Text>
                                <Text style={styles.data}>{user.BIRTH_DATE.substring(0,10)}</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.dataTitle}>Nacionalidad:</Text>
                                <Text style={styles.data}>{user.NATIONALITY}</Text>
                            </View>
                            
                            <View style={styles.column}>
                                <Text style={styles.dataTitle}>Estado de Nacimiento:</Text>
                                <Text style={styles.data}>{user.STATE_BORN_IN}</Text>
                            </View>
                            
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.dataTitle}>Género:</Text>
                                <Text style={styles.data}>{user.GENDER}</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.dataTitle}>Actividad Económica:</Text>
                                <Text style={styles.data}>{user.OCCUPATION}</Text>
                            </View>

                            <View style={styles.column}>
                                <Text style={styles.dataTitle}>RFC:</Text>
                                <Text style={styles.data}>{user.RFC}</Text>
                            </View>
                            
                        </View>
                        <View style={styles.row}>
                            
                            <View style={styles.column}>
                                <Text style={styles.dataTitle}>CURP:</Text>
                                <Text style={styles.data}>{user.CURP}</Text>
                            </View>

                            <View style={styles.column}>
                                <Text style={styles.dataTitle}>Número de Telefono:</Text>
                                <Text style={styles.data}>{user.PHONE_NUMBER}</Text>
                            </View>

                            <View style={styles.column}>
                                <Text style={styles.dataTitle}>Correo electrónico:</Text>
                                <Text style={styles.data}>{user.EMAIL}</Text>
                            </View>
                        </View>
                       
                    </View>
                </View>
            </Page>
    </Document> 
  )
}

export default AccesoPDF;