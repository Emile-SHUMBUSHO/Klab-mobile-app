import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Keyboard,
} from "react-native";
import { Button2 } from "../../components/button";
import Modal from "../../components/modalPoup";
import Input from "../../components/input";
import DropDownPicker from "react-native-dropdown-picker";
import { Button1 } from "../../components/button";
import { useState } from "react";
import { bookEvent } from "../../redux/actions";
import { useDispatch } from "react-redux";

export const EventCard = (props) => {
  const dispatch = useDispatch();
  const { title, id } = props;
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ]);
  const [errors, setErrors] = useState({});
  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleErrors = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  const [inputs, setInputs] = useState({
    names: "",
    email: "",
    phone: "",
    address: "",
    professionalism: "",
    affiliation: "",
    areYouKlabMember: "",
    eventId: id,
  });

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.names) {
      handleErrors("please provide names", "names");
      isValid = false;
    }
    if (!inputs.email) {
      handleErrors("please input email address", "email");
      isValid = false;
    } else if (!inputs.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      handleErrors("please input valid email address", "email");
      isValid = false;
    }
    if (!inputs.phone) {
      handleErrors("please provide a phone number", "phone");
      isValid = false;
    }
    if (!inputs.address) {
      handleErrors("please provide your address", "address");
      isValid = false;
    }
    if (!inputs.professionalism) {
      handleErrors("please provide your professionalism", "professionalism");
      isValid = false;
    }

    if (!inputs.affiliation) {
      handleErrors("please provide your affiliation", "affiliation");
      isValid = false;
    }

    if (!inputs.areYouKlabMember) {
      handleErrors("please choose your status", "areYouKlabMember");
      isValid = false;
    }
    if (isValid) {
      register();
    }
  };

  const register = () => {
    const formdata = new FormData();
    formdata.append("name", inputs.names);
    formdata.append("email", inputs.email);
    formdata.append("contact", inputs.phone);
    formdata.append("address ", inputs.address);
    formdata.append("proffessional", inputs.professionalism);
    formdata.append("affiliation", inputs.affiliation);
    formdata.append("are_you_klab_member", inputs.areYouKlabMember);
    formdata.append("event_id", inputs.eventId);
    dispatch(bookEvent(formdata));
    setOpenModal(false);
  };
  return (
    <View style={styles.content}>
      <Modal visible={openModal}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.modalContent}
        >
          <Input
            style={styles.Input}
            placeholder="Names"
            onChangeText={(text) => handleOnChange(text, "names")}
            onFocus={() => handleErrors(null, "names")}
            error={errors.names}
          />
          <Input
            style={styles.Input}
            placeholder="Email Address"
            onChangeText={(text) => handleOnChange(text, "email")}
            onFocus={() => handleErrors(null, "email")}
            error={errors.email}
          />
          <Input
            style={styles.Input}
            placeholder="Phone Number"
            onChangeText={(text) => handleOnChange(text, "phone")}
            onFocus={() => handleErrors(null, "phone")}
            error={errors.phone}
          />
          <Input
            style={styles.Input}
            placeholder="Address"
            onChangeText={(text) => handleOnChange(text, "address")}
            onFocus={() => handleErrors(null, "address")}
            error={errors.address}
          />
          <Input
            style={styles.Input}
            placeholder="Professionalism"
            onChangeText={(text) => handleOnChange(text, "professionalism")}
            onFocus={() => handleErrors(null, "professionalism")}
            error={errors.professionalism}
          />
          <Input
            style={styles.Input}
            placeholder="Affiliation"
            onChangeText={(text) => handleOnChange(text, "affiliation")}
            onFocus={() => handleErrors(null, "affiliation")}
            error={errors.affiliation}
          />
          <DropDownPicker
            style={styles.dropDownPicker}
            placeholder="Are you Klab Member"
            onChangeValue={(value) => handleOnChange(value, "areYouKlabMember")}
            onChangeText={(text) => handleOnChange(text, "areYouKlabMember")}
            onFocus={() => handleErrors(null, "areYouKlabMember")}
            error={errors.areYouKlabMember}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            zIndex={1000}
            borderWidth={0}
            dropDownContainerStyle={{
              borderWidth: 0,
              height: 100,
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 2,
              paddingHorizontal: 5,
              borderRadius: 20,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Button1 title="Submit" onPress={validate} />
            <Button1
              title="Cancel"
              onPress={() => {
                setOpenModal(false);
              }}
            />
          </View>
        </ScrollView>
      </Modal>
      <ImageBackground
        source={require("../../../assets/pevent1.jpg")}
        borderRadius={10}
      >
        <View style={{ height: 200 }} />
      </ImageBackground>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ margin: 10, fontSize: 18, fontWeight: "bold" }}>
            {title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Button2
              onPress={() => {
                setOpenModal(true);
              }}
              title="Book a seat"
            />
          </View>
        </View>
        <View>
          <Text style={{ margin: 10 }}>
            Last Evening @klabrw hosted our #StartupsDemoNight and various
            #techpreneurs showcased their solutions, & discussed how they can
            broaden and sustain their opportunities within the #local and
            #global
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
    margin: 20,
  },
  dropDownPicker: {
    height: 50,
    top: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0,
    borderRadius: 20,
  },
});
