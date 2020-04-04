import React, { useState, useEffect } from 'react';
//O Componente FlatLis permite criar uma scroll na listage dos instens
//O componente TouchableOpacity cria um link com uma opacidade
import { Text, View, Image, FlatList, TouchableOpacity  } from 'react-native';
//Importando o pacote de ícones
import { Feather } from '@expo/vector-icons';
//Importando o componente de navegação. Semelhante ao useHistory do react.
import { useNavigation } from '@react-navigation/native';
//Ao importar uma imagem no react native é necessário colocar a extensão.
import logoImg from '../../assets/logo.png'
import styles from './styles'
//Importando a API para integrar com o backend
import api from '../../services/api';

export default function Incidents(){
   //Iniciando minha variavel incidents com um array vazio, já que a mesma vai ser alimentada com um array
    //Sempre que precisarmos exibir uma informação na tela, é necessário utilizar o useState,
    //Onde a primeira variavel é onde o valor ficará armazenado e a segunda, é o método responsável por atualizar 
    //o valor da variavel do primeiro parâmetro
    const [incidents, setIncidents] = useState([]);
    //Armazena o total de itens que nossa requisição retornou.
    const [total, setTotal] = useState(0);

    //Variavel utilizada para marcar a página que o usuário está
    const [page, setPage] = useState(1);
    //Cria um semáforo para evitar que mais dados sejam carregados, enquanto não termina a primeira requisção.
    const [loading, setLoading] = useState(false);
    

    async function loadIcidents(){

        //Se já estiver sendo carregado os dados, não realiza nenhuma outra requisção enquanto não terminar.
        if (loading) {
            return;
        }

        //Se ele já carregou todos os incidents, não realiza mais nenhuma oparação.
        if (total > 0 && incidents.length === total ) {
            return;
        }
        //Ativa o samáforo para informar que os dados estão sendo carregados
        setLoading(true);

        //Realiza uma requisição a nossa rota incidents, retornando todos os incidents;
        //Passamos como parâmetro o número da página que queremos retornar o número de incidents
        //Uma outra forma de passar parâmetro: await api.get('incidents?page=${page}'
        const response = await api.get('incidents', { 
            params: { page }
        });

        //Concatena os dados da variavel incident junto com os que foram retornados na aplicação.
        //setIncidents([...incidents, ... response.data]);    
        setIncidents([...incidents, ...response.data]);
      
        //Obtem o total de registros que nossa requisição a partir do cabeçalho header, onde criamos essa variavel
        //x-total-count no backend para armazenar o total geral de registros.
        setTotal(response.headers['x-total-count']);
        

        setPage(page + 1);
        //Desativa o samáforo após os dados serem retornados
        setLoading(false);
    }

    //Sempre que precisarmos atualizar uma informação na tela, devemos usar o componente useEffect.
    //Toda vez que o segundo parâmetro for alterado, o método loadIncidents será executado.
    useEffect(() => {
        loadIcidents();
    }, []);

    //Instânciando o componente de navegaçãp
    const navigation = useNavigation();
    //Realiza a rota navegando para a página de Detail
    function navigateToDetail(incident){
        navigation.navigate('Detail', { incident });
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
            {/* FlatList propriedades:
                data         = Recebe um  array com os dados que devem ser montados
                renderItem   = Possui vários parâmetros, então realizamos a desestruturação, para obtermos o "item" que é justamente cada um dos incidents. Além do mais, essa função é  responsável por renderizar cada item da lista. item: incidents, significa que atribuimos o valor de item para a variavel incidents
                keyExtractor = Usado para diferenciar cada um dos itens da listagem. Ou seja, um identificador único para cada card
                showsVerticalScrollIndicator = Oculta a scroollbar da listagem
                onEndReached = recebe como parâmetro uma função que é disparada automáticamente quando o usuário chegar no fim da lista.
                onEndReachedThreshold = Serve para informar que quando chegar 0.2 = 20% do final da lista, executar a função do onEndReached
                
            */}

            <FlatList  
                data={incidents}
                style={styles.incidentList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIcidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>
                        {Intl.NumberFormat('pt-BR', { 
                            style: 'currency', 
                            currency: 'BRL' }).format(incident.value)}</Text>
                      {/*O componente TouchableOpacity obrigatoriamente deve ter o método onPress;
                    Sempre que precisar passar parâmetro em uma função é necessário, criar uma arrow
                    function antes, caso contrario a função será executada assim que aplicação for iniciada. */}
                    <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(incident)}>
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#e02041" />
                    </TouchableOpacity>
                </View>

                )}
            />
        </View>
    );
}