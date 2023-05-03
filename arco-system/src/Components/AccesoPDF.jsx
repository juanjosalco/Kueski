import React from 'react'
import {Page, Text, View, Document, StyleSheet} from "@react-pdf/renderer";


const styles = StyleSheet.create  ({
    blackBack:{
        display: "flex",
        width: "100vw",
        minHeight: "100vh",
        background: "rgba(0, 0, 0, .5)",
        position: "absolute",
        justifyContent: "center",
        zIndex: "20",
        padding: "64px"
    },
    dataSection:{
        display: "grid",
        gap: "16px",
        width: "100%",
        heigth:  "100%"
    },
    dataTitle:{
        fontSize: "24px"
    },
    data:{
        fontSize: "18px"
    },
    newSectionTitle:{
        fontSize: "30px"
    },
    divisor:{
        marginTop: "16px",
        marginBottom: "16px",
        height: "4px",
        borderTopWidth: "0",
        backgroundColor: "#000000"
    },
    side:{
        display: "grid",
        width: "33%",
        height: "100%",
        gap: "32px"
    },
    side2:{
        display: "grid",
        width: "50%",
        height: "100%",
        gap: "32px"
    },
    columns: {
        display: "flex",
    }
});

function AccesoPDF({user}) {
    return (
        <Document>
            <Page size="A4">
                <View style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "10px"}}>
                    <Text style={{fontSize: "20px", justifyContent: "flex-start"}}> Reporte de Información del usuario </Text> 
                                <Text style={styles.newSectionTitle}>Información del usuario</Text>
                               
                                            <Text style={styles.dataTitle}>Nombre</Text>
                                            <Text style={styles.data}>{user.F_NAME}</Text>
                                        
                                            <Text style={styles.dataTitle}>Fecha de Nacimiento</Text>
                                            <Text style={styles.data}>{user.BIRTH_DATE.substring(0,10) }</Text>
                                    
                                            <Text style={styles.dataTitle}>Estado de Nacimiento</Text>
                                            <Text style={styles.data}>{user.STATE_BORN_IN}</Text>
                                    
                                            <Text style={styles.dataTitle}>RFC</Text>
                                            <Text style={styles.data}>{user.RFC}</Text>
                                                                                   
                                            <Text style={styles.dataTitle}>Primer Apellido</Text>
                                            <Text style={styles.data}>{user.LNAME1}</Text>
                                      
                                            <Text style={styles.dataTitle}>Nacionalidad</Text>
                                            <Text style={styles.data}>{user.NATIONALITY}</Text>
                               
                                            <Text style={styles.dataTitle}>Actividad Económica</Text>
                                            <Text style={styles.data}>{user.OCCUPATION}</Text>
                                  
                                            <Text style={styles.dataTitle}>Número de Telefono</Text>
                                            <Text style={styles.data}>{user.PHONE_NUMBER}</Text>
                                       
                                     
                                            <Text style={styles.dataTitle}>Segundo Apellido</Text>
                                            <Text style={styles.data}>{user.LNAME2}</Text>
                                       
                                            <Text style={styles.dataTitle}>Género</Text>
                                            <Text style={styles.data}>{user.GENDER}</Text>
                                       
                                            <Text style={styles.dataTitle}>CURP</Text>
                                            <Text style={styles.data}>{user.CURP}</Text>
                                        
                                            <Text style={styles.dataTitle}>Email</Text>
                                            <Text style={styles.data}>{user.EMAIL}</Text>
                                      
                                             <Text style={styles.newSectionTitle}>Direccción del usuario</Text>
                             
                                            <Text style={styles.dataTitle}>País</Text>
                                            <Text style={styles.data}>{user.COUNTRY}</Text>
                                
                                            <Text style={styles.dataTitle}>Colonia</Text>
                                            <Text style={styles.data}>{user.NEIGHBORHOOD}</Text>
                               
                                            <Text style={styles.dataTitle}>Número Exterior</Text>
                                            <Text style={styles.data}>{user.EXT_NUMBER}</Text>
                            
                                            <Text style={styles.dataTitle}>Estado</Text>
                                            <Text style={styles.data}>{user.STATE}</Text>
                                      
                                            <Text style={styles.dataTitle}>Código Postal</Text>
                                            <Text style={styles.data}>{user.ZIP_CODE}</Text>
                                      
                                            <Text style={styles.dataTitle}>Número Interior</Text>
                                            <Text style={styles.data}>{user.INT_NUMBER}</Text>
                                   
                                            <Text style={styles.dataTitle}>Ciudad</Text>
                                            <Text style={styles.data}>{user.CITY}</Text>
                                  
                                            <Text style={styles.dataTitle}>Calle</Text>
                                            <Text style={styles.data}>{user.STREET}</Text>
                                        
                                            <Text style={styles.newSectionTitle}>Identificaciones del usuario</Text>
                                   
                                            <Text style={styles.dataTitle}>Tipo de Identificación</Text>
                                            <Text style={styles.data}>{user.ID_NUMBER}</Text>
                                      
                                            <Text style={styles.dataTitle}>Número de Identificación</Text>
                                            <Text style={styles.data}>{user.ID_TYPE}</Text>
                </View>
            </Page>
    </Document> 
  )
}

export default AccesoPDF;