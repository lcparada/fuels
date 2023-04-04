import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { useState } from "react";

export default function Home() {
  const [priceAlcool, setPriceAlcool] = useState("");
  const [priceGasoline, setPriceGasoline] = useState("");
  const [theBestOption, setTheBestOption] = useState("");

  const [error, setError] = useState("");

  const [openOrCloseModal, setOpenOrCloseModal] = useState(false);

  function transformationInputAlcoolAndInputGasolineInNumber(
    priceAlcool: string,
    priceGasoline: string
  ): number[] {
    priceAlcool = priceAlcool.replaceAll(",", ".");
    const priceAlcoolInNumber = Number(priceAlcool);
    priceGasoline = priceGasoline.replaceAll(",", ".");
    const priceGasolineInNumber = Number(priceGasoline);

    return [priceAlcoolInNumber, priceGasolineInNumber];
  }

  function calculateTheBestOption(arrNumber: number[]) {
    if (arrNumber[0] / arrNumber[1] < 0.7) {
      setTheBestOption("Álcool");
      setOpenOrCloseModal(true);
      setError("");
    } else if (arrNumber[0] / arrNumber[1] >= 0.7) {
      setTheBestOption("Gasolina");
      setOpenOrCloseModal(true);
      setError("");
    } else if (arrNumber[0] === 0 || arrNumber[1] === 0) {
      setError("Os campos devem ser preenchidos corretamente");
      setOpenOrCloseModal(false);
    }
  }

  function clearAll() {
    setOpenOrCloseModal(!openOrCloseModal);
    setPriceAlcool("");
    setPriceGasoline("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View style={styles.containerMainText}>
          <MaterialCommunityIcons name="fuel" size={150} color="#8D99AE" />
          <Text style={styles.mainText}>Qual melhor opção ?</Text>
        </View>

        <View style={styles.containerInputAlcool}>
          <Text style={styles.error}>{error}</Text>
          <Text style={styles.textInputAlcool}>Álcool (preço por litro):</Text>
          <TextInput
            style={styles.inputAlcool}
            placeholder="0.00"
            value={priceAlcool}
            onChangeText={setPriceAlcool}
            keyboardType="numeric"
          ></TextInput>
        </View>

        <View style={styles.containerInputGasoline}>
          <Text style={styles.textInputGasoline}>
            Gasolina (preço por litro):
          </Text>
          <TextInput
            style={styles.inputGasoline}
            placeholder="0.00"
            value={priceGasoline}
            onChangeText={setPriceGasoline}
            keyboardType="numeric"
          ></TextInput>
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              calculateTheBestOption(
                transformationInputAlcoolAndInputGasolineInNumber(
                  priceAlcool,
                  priceGasoline
                )
              )
            }
          >
            <Text style={styles.textButton}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal animationType="slide" visible={openOrCloseModal}>
        <SafeAreaView style={styles.container}>
          <StatusBar style="dark" />
          <View style={styles.containerMainTextModal}>
            <MaterialCommunityIcons
              name="gas-station"
              size={150}
              color="#8D99AE"
            />
            <Text style={styles.mainTextModal}>
              Compensa usar {theBestOption}
            </Text>
          </View>

          <View style={styles.containerSubText}>
            <Text style={styles.subText}>Com os preços:</Text>
            <Text style={styles.priceText}>Álcool: R$ {priceAlcool} </Text>
            <Text style={styles.priceText}>Gasolina: R$ {priceGasoline}</Text>
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.buttonModal} onPress={clearAll}>
              <Text style={styles.textButtonModal}>Calcular novamente</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}
