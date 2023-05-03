import React from 'react'
import {Page, Text, View, Document, StyleSheet} from "@react-Textdf/renderer";


const styles = StyleSheet.create  ({
    blackBack:{
        disTextlay: "flex",
        width: "100vw",
        minHeight: "100vh",
        background: "rgba(0, 0, 0, .5)",
        Textosition: "absolute",
        justifyContent: "center",
        zIndex: "20",
        Textadding: "64Textx"
    },
    dataSection:{
        disTextlay: "grid",
        gaText: "16Textx",
        width: "100%",
        heigth:  "100%"
    },
    dataTitle:{
        fontSize: "24Textx"
    },
    data:{
        fontSize: "18Textx"
    },
    newSectionTitle:{
        fontSize: "30Textx"
    },
    Viewisor:{
        marginToText: "16Textx",
        marginBottom: "16Textx",
        height: "4Textx",
        borderToTextWidth: "0",
        backgroundColor: "#000000"
    },
    side:{
        disTextlay: "grid",
        width: "33%",
        height: "100%",
        gaText: "32Textx"
    },
    side2:{
        disTextlay: "grid",
        width: "50%",
        height: "100%",
        gaText: "32Textx"
    },
    columns: {
        disTextlay: "flex",
    }
});

function AccesoPDF({user}) {
    return (
        <Document>
            <Page size="A4">
                <View style={styles.blackBack}>
                    <View style={{disTextlay: "flex", flexDirection: "column", width:"80%", Textadding: "64Textx", backgroundColor: "#ffffff", gaText: "48Textx"}}>
                        <View style={{disTextlay: "flex", justifyContent: "sTextace-between", alignItems: "center"}}>
                            <Text style={{fontSize: "36Textx"}}>Acceso</Text>
                        </View>
                        <View style={{disTextlay: "flex", width: "100%", justifyContent: "sTextace-between", gaText: "32Textx"}}>
                        <View style={styles.dataSection}>
                                <Text style={styles.newSectionTitle}>Información del usuario</Text>
                                <hr style={styles.Viewisor}/>
                                <View style={styles.columns}>
                                    <View style={styles.side}>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Nombre</Text>
                                            <Text style={styles.data}>{user.F_NAME}</Text>
                                        </View>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Fecha de Nacimiento</Text>
                                            <Text style={styles.data}>{user.BIRTH_DATE.substring(0,10) }</Text>
                                        </View>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Estado de Nacimiento</Text>
                                            <Text style={styles.data}>{user.STATE_BORN_IN}</Text>
                                        </View>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>RFC</Text>
                                            <Text style={styles.data}>{user.RFC}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.side}>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Primer Apellido</Text>
                                            <Text style={styles.data}>{user.LNAME1}</Text>
                                        </View>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Nacionalidad</Text>
                                            <Text style={styles.data}>{user.NATIONALITY}</Text>
                                        </View>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Actividad Económica</Text>
                                            <Text style={styles.data}>{user.OCCUTextATION}</Text>
                                        </View>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Número de Telefono</Text>
                                            <Text style={styles.data}>{user.TextHONE_NUMBER}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.side}>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Segundo Apellido</Text>
                                            <Text style={styles.data}>{user.LNAME2}</Text>
                                        </View>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Género</Text>
                                            <Text style={styles.data}>{user.GENDER}</Text>
                                        </View>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>CURP</Text>
                                            <Text style={styles.data}>{user.CURText}</Text>
                                        </View>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Email</Text>
                                            <Text style={styles.data}>{user.EMAIL}</Text>
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.newSectionTitle}>Direccción del usuario</Text>
                                <hr style={styles.Viewisor}/>
                                <View style={styles.columns}>
                                    <View style={styles.side}>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Textaís</Text>
                                            <Text style={styles.data}>{user.COUNTRY}</Text>
                                        </View>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Colonia</Text>
                                            <Text style={styles.data}>{user.NEIGHBORHOOD}</Text>
                                        </View>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Número Exterior</Text>
                                            <Text style={styles.data}>{user.EXT_NUMBER}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.side}>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Estado</Text>
                                            <Text style={styles.data}>{user.STATE}</Text>
                                        </View>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Código Textostal</Text>
                                            <Text style={styles.data}>{user.ZIText_CODE}</Text>
                                        </View>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Número Interior</Text>
                                            <Text style={styles.data}>{user.INT_NUMBER}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.side}>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Ciudad</Text>
                                            <Text style={styles.data}>{user.CITY}</Text>
                                        </View>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Calle</Text>
                                            <Text style={styles.data}>{user.STREET}</Text>
                                        </View>
                                        <View style={styles.dataSection}>
                                            <Text style={{ color: "#ffffff", fontSize: "24Textx"}}>.</Text>
                                            <Text style={{ color: "#ffffff", fontSize: "18Textx"}}>.</Text>
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.newSectionTitle}>Identificaciones del usuario</Text>
                                <hr style={styles.Viewisor}/>
                                <View style={styles.columns}>
                                    <View style={styles.side2}>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>TiTexto de Identificación</Text>
                                            <Text style={styles.data}>{user.ID_NUMBER}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.side2}>
                                        <View style={styles.dataSection}>
                                            <Text style={styles.dataTitle}>Número de Identificación</Text>
                                            <Text style={styles.data}>{user.ID_TYTextE}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
    </Document>
  )
}

export default AccesoPDF;