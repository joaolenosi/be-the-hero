import { StyleSheet } from 'react-native';
//Importando o pacote que possui várias contanstes pré-definidon
//Como por exemplo: Altura da statusBar
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,/*Ocupa toda tela*/
        paddingHorizontal: 24,/* Cria um padding de 24px na esquerda e na direita*/
        paddingTop: Constants.statusBarHeight + 20,/*Cria um padding do tamanho da altura da status bar + 20px*/
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',        
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 28,
        color: '#13131a',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
    },

    incidentList: {
        marginTop: 32,
    },

    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },

    detailsButton: {
        flexDirection: 'row', /* Posiciona a flexa do lado direito. */
        justifyContent: 'space-between',/* Cria um espaçamento entre os dois componentes. */
        alignItems: 'center',/* Centraliza os componentes. */
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold',
    },
});