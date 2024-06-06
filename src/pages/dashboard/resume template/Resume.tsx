import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import "./resume.scss"
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'red',
    width: "100%",
    height: "100vh"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function Resume() {
  return (
    <PDFViewer className='resume-viewer'>

    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
   </PDFViewer>

  )
}
