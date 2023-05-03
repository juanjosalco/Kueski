import React from 'react'
import {Page, Text, View, Document, StyleSheet} from "@react-pdf/renderer";

function Test() {
    return (
        <Document>
            <Page size="A4">
                <Text>Mimmmi</Text>
            </Page>
    </Document>
  )
}

export default Test;