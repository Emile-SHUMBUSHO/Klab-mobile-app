import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo, Feather } from "@expo/vector-icons";
import Input from "../../components/input";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { join } from "../../redux/actions";

const JoinScreen = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    phone: "",
    province: "",
    district: "",
    sector: "",
    cell: "",
    village: "",
    age: "",
    gender: "",
    graduated: "",
    attended: "",
    studyField: "",
    about: "",
    haveProject: "",
    projectLink: "",
  });
  const [resume, setResume] = useState(null);
  const [projectImage, setProjectImage] = useState(null);

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleErrors = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  const selectResume = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({});
      setResume(res);
      resume?.type === "cancel" && alert("Canceled");
    } catch (err) {
      alert("Unknown Error: ", err);
      throw err;
    }
  };

  const selectProjectImage = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({});
      setProjectImage(res);
      projectImage?.type === "cancel" && alert("Canceled");
    } catch (err) {
      alert("Unknown Error: ", err);
      throw err;
    }
  };

  const validate = () => {
    Keyboard.dismiss();
    setIsLoading(true);
    let isValid = true;
    if (!inputs.email) {
      handleErrors("please input email address", "email");
      isValid = false;
    } else if (
      !inputs.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/)
    ) {
      handleErrors("please input valid email address", "email");
      isValid = false;
    }

    if (!inputs.fullName) {
      handleErrors("please input full name", "fullName");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    const data = {
      fullName: inputs.fullName,
      email: inputs.email,
      age: inputs.age,
      gender: inputs.gender,
      phone: inputs.phone,
      province: inputs.province,
      district: inputs.district,
      sector: inputs.sector,
      cell: inputs.cell,
      village: inputs.village,
      attended_school: inputs.attended,
      have_you_graduated: inputs.graduated,
      // program_id: inputs.,
      resume,
      project_screenshot: projectImage,
    };
    const formdata = new FormData();
    formdata.append({ ...data });
    console.log(formdata);
    setIsLoading(false);
    dispatch(join(formdata));
    // navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.top}>
            <TouchableOpacity
              style={{ right: 120 }}
              onPress={() => {
                props.navigation.navigate("home");
              }}
            >
              <Entypo name="chevron-left" size={24} color="white" />
            </TouchableOpacity>
            <Text style={{ color: "white" }}>Join TechUpSkill</Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <View style={styles.content}>
              <Input
                style={styles.input}
                placeholder="Enter Your Full Name"
                onChangeText={(text) => handleOnChange(text, "fullName")}
                onFocus={() => handleErrors(null, "fullName")}
                error={errors.fullName}
              />

              <Input
                style={styles.input}
                iconName="email"
                placeholder="Enter Your Email"
                onChangeText={(text) => handleOnChange(text, "email")}
                onFocus={() => handleErrors(null, "email")}
                error={errors.email}
              />

              <Input
                style={styles.input}
                iconName="phone"
                placeholder="Enter Your Phone Number"
                onChangeText={(text) => handleOnChange(text, "phone")}
                onFocus={() => handleErrors(null, "phone")}
                error={errors.phone}
              />
              <Input
                style={styles.input}
                placeholder="Province"
                onChangeText={(text) => handleOnChange(text, "province")}
                onFocus={() => handleErrors(null, "province")}
                error={errors.province}
              />
              <Input
                style={styles.input}
                placeholder="District"
                onChangeText={(text) => handleOnChange(text, "district")}
                onFocus={() => handleErrors(null, "district")}
                error={errors.district}
              />
              <Input
                style={styles.input}
                placeholder="Sector"
                onChangeText={(text) => handleOnChange(text, "sector")}
                onFocus={() => handleErrors(null, "sector")}
                error={errors.sector}
              />
              <Input
                style={styles.input}
                placeholder="Cell"
                onChangeText={(text) => handleOnChange(text, "cell")}
                onFocus={() => handleErrors(null, "cell")}
                error={errors.cell}
              />
              <Input
                style={styles.input}
                placeholder="Village"
                onChangeText={(text) => handleOnChange(text, "village")}
                onFocus={() => handleErrors(null, "village")}
                error={errors.village}
              />
              <Input
                style={styles.input}
                placeholder="Age"
                onChangeText={(text) => handleOnChange(text, "age")}
                onFocus={() => handleErrors(null, "age")}
                error={errors.age}
              />
              <DropDownPicker
                style={styles.dropDownPicker}
                placeholder="Choose your Gender"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                zIndex={1000}
                onChangeValue={(value) => {
                  handleOnChange(value, "gender");
                }}
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
                  paddingHorizontal: 15,
                  borderRadius: 20,
                }}
              />
              <Input
                style={styles.input}
                placeholder="Have you graduated"
                onChangeText={(text) => handleOnChange(text)}
                onFocus={() => handleErrors(null, "graduated")}
                error={errors.graduated}
              />

              <Input
                style={styles.input}
                placeholder="Attended school"
                onChangeText={(text) => handleOnChange(text, "attended")}
                onFocus={() => handleErrors(null, "attended")}
                error={errors.attended}
              />

              <Input
                style={styles.input}
                placeholder="Field of study"
                onChangeText={(text) => handleOnChange(text, "studyField")}
                onFocus={() => handleErrors(null, "studyField")}
                error={errors.studyField}
              />

              <Input
                style={styles.input}
                placeholder="Tell us about your self"
                onChangeText={(text) => handleOnChange(text, "about")}
                onFocus={() => handleErrors(null, "about")}
                error={errors.about}
              />

              <Input
                style={styles.input}
                placeholder="Do you have a project"
                onChangeText={(text) => handleOnChange(text, "haveProject")}
                onFocus={() => handleErrors(null, "haveProject")}
                error={errors.haveProject}
              />

              <Input
                style={styles.input}
                placeholder="Project GitHub Link"
                onChangeText={(text) => handleOnChange(text, "projectLink")}
                onFocus={() => handleErrors(null, "projectLink")}
                error={errors.projectLink}
              />

              <TextInput
                style={[styles.dropDownPicker]}
                editable={false}
                defaultValue={"Program"}
              />
              <View style={[styles.dropDownPicker, styles.select]}>
                {resume ? (
                  <Text style={styles.upload}>{resume.name}</Text>
                ) : (
                  <Text style={styles.upload}>Upload your Resume</Text>
                )}
                <TouchableOpacity onPress={selectResume}>
                  <Feather name="upload" size={20} color={"#000"} />
                </TouchableOpacity>
              </View>

              <View style={[styles.dropDownPicker, styles.select]}>
                {projectImage ? (
                  <Text style={styles.upload}>{projectImage.name}</Text>
                ) : (
                  <Text style={styles.upload}>Upload project screenshot</Text>
                )}
                <TouchableOpacity onPress={selectProjectImage}>
                  <Feather name="upload" size={20} color={"#000"} />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  flexDirection: "row",
                  marginTop: 25,
                }}
              >
                <TouchableOpacity style={styles.submitBtn} onPress={validate}>
                  <Text style={{ color: "#FFFF" }}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default JoinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  top: {
    width: "100%",
    height: "15%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "column",
    justifyContent: "center",
    margin: 20,
  },

  dropDownPicker: {
    height: 50,
    top: 25,
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
    alignItems: "center",
    justifyContent: "space-between",
  },

  select: {
    marginTop: 25,
    // marginBottom: 10,
  },

  submitBtn: {
    width: "70%",
    backgroundColor: "black",
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});
