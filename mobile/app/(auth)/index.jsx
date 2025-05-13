import { View, Text, TextInput, TouchableOpacity,ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native'
import {Link} from "expo-router"
import styles from "../../assets/styles/login.styles"
import {useState} from "react"
import {Ionicons} from "@expo/vector-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword]=useState("");
  const [showPassword, setShowPassword]=useState("");
  const [isLoading, setIsLoading] = useState("");

  const handleLogin=()=>{};

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
    <View style={styles.container} >
      <View style={styles.topIllustration} >
      <Image
        source={require("../../assets/images/i.png")}
        style={styles.illustrationImage}
        resizeMode="contain"
      />
      </View>
      <View style={styles.card} >
        <View style={styles.formContainer}>
          {/* email */}
          <View style={styles.inputGroup}  >
            <Text style={styles.inputContainer} >Email</Text>
            <View style={styles.inputContainer} >
              <Ionicons
                name='mail-outline'
                size={20}
                color={COLORS.primary}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder='Enter your email'
                placeholderTextColor={COLORS.placeholder}
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
              >

              </TextInput>

            </View>
            
          </View>
          {/* password */}
          <View style={styles.inputGroup}>
            <Text style={styles.label} >Password</Text>
            <View style={styles.inputContainer} >
              {/* left icons */}
              <Ionicons
                name='lock-closed-outline'
                size={20}
                color={COLORS.primary}
                style={styles.inputIcon}
              />
              {/* input */}
              <TextInput
                style={styles.input}
                placeholder='Enter your password'
                placeholderTextColor={COLORS.placeholderTextColor}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={()=>setPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                <Ionicons
                  name={showPassword ? "eye-outline" : 'eye-off-outline'}
                  size={20}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
            </View>
            
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}
          disabled={isLoading} >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}

          </TouchableOpacity>
          {/* footer */}
          <View style={styles.footer} >
            <Text style={styles.footerText} >Don't have an account?</Text>
            <Link href="/signup" asChild >
              <TouchableOpacity>
                <Text style={styles.link} >Sign Up</Text>
              </TouchableOpacity>
            </Link>

          </View>
        </View>
      </View>
    </View>
    </KeyboardAvoidingView>
  )
}