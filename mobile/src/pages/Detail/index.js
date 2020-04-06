import React from 'react';
import { Feather } from '@expo/vector-icons';
//useRoute serve para pegar as informações da página atual da nossa aplicação
import { useNavigation, useRoute } from '@react-navigation/native';
//Linking serve para abrir aplicativos através da tecnologia deep link.
//Que basicamente é uma URL que aplicações famosas fornecem, para que possamos abrir ela, passando parâmetros.
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
//Pacote para envio de email
import * as MailComposer from 'expo-mail-composer';


import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail(){
    const navigation = useNavigation();
    //useRoute serve para pegar as informações da página atual(URL) da nossa aplicação
    const route = useRoute();

    //Obtém o parâmetro que foi passado na rota(URL).
    //Ou seja, eu envie um parâmetro chamado incidents, que no php equivaleria a: $_POST['incidents']
    //Armazenamos o incident na variavel para poder acessar os demias itens.
    const incident = route.params.incident;
    const messege = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`;


    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: messege,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=+55${incident.whatsapp}&text=${messege}`);

    }



   
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <Image source={logoImg} />
                </TouchableOpacity>

                <TouchableOpacity onPress={(navigateBack)}>
                    <Feather name="arrow-left" size={20} style={styles.teste}  color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                {/* Array de objetos em css, o primeito utilizando a classe e o segundo CSS inline*/}
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>
                    {Intl.NumberFormat('pt-BR', { 
                    style: 'currency', 
                    currency: 'BRL' }).format(incident.value)}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                    </View>
            </View>
        </View>
    );
}