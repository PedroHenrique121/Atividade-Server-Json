import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import axios from 'axios';

export default function EditarContato({ route, navigation }) {

  const { contato } = route.params;
  const [id, setId] = useState(contato.id);
  const [nome, setNome] = useState(contato.nome);
  const [telefone, setTelefone] = useState(contato.telefone);
  const [email, setEmail] = useState(contato.email);

  // URL do backend (PC)
  const API_URL = 'http://localhost:3000/contatos';

  function alterarDados() {
    axios.put(`${API_URL}/${id}`, {
      nome: nome,
      telefone: telefone,
      email: email
    })
    .then(function (response) {
      console.log('Alterado:', response.data);
      navigation.goBack(); // volta para tela anterior
    })
    .catch(function (error) {
      console.log('Erro ao alterar:', error);
    });
  }

  function excluirDados() {
    axios.delete(`${API_URL}/${id}`)
    .then(function (response) {
      console.log('Excluído:', response.data);
      navigation.goBack(); // volta para tela anterior
    })
    .catch(function (error) {
      console.log('Erro ao excluir:', error);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Contato</Text>

      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Telefone"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />

      <Button title="Alterar" onPress={alterarDados} />
      <Button title="Excluir" onPress={excluirDados} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  }
});