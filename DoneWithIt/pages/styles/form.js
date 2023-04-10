export default const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#702FBF',
      alignItems: 'center',
      // justifyContent: 'center',
      paddingTop: Platform.OS === "android" ? 20 : 0 
    },
    tinyLogo: {
      width: 50,
      height: 50
    },
    logo: {
      width: 300,
      height: 300,
    },
    button: {
      backgroundColor: '#EDB951',
      padding: 20
    },
    input: {
      color: '#000000'
    }
});