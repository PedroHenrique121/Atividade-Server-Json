
import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';



export default function EditarContato({ route, navigation }) {

  const { contato } = route.params;
  const [id, setId] = useState(contato.id);
  const [nome, setNome] = useState(contato.nome);
  const [telefone, setTelefone] = useState(contato.telefone);
  const [email, setEmail] = useState(contato.email);
 function alterarDados(){

axios.put('http://localhost:3000/contatos/id')
,{
nome: getNome,
telefone: getTelefone,
cpf: getCpf
}.then(function (response) {
console.log(response);
}).catch(function (error) {
console.log(error);

});

}
function excluirDados(){

axios.delete('http://http://localhost:3000/contatos/id')

.then(function (response) {
console.log(response);
}).catch(function (error) {
console.log(error);

});

}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Contato</Text>

      <TextInput style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} />
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Button title="Alterar" onPress={alterarDados} />
      <Button title="Excluir" onPress={excluirDados} />
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
  },
  item: {
    padding: 10,
    borderBottomWidth: 1
  },
  nome: {
    fontWeight: 'bold'
  }
});
