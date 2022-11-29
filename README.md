# appwrite-RN
NOTE: Works with React Native and Bare expo apps
# Step 1
Install the following packages
`yarn add appwrite expo-random expo-auth-session @react-native-cookies/cookies`

# Step 2
Replace [YOUR_POJECT_ID] with your appwrite project id and run 
```
npx uri-scheme add appwrite-callback-[YOUR_POJECT_ID]
```
# Usage
```
import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Client, Account } from "appwrite";
import { Oauthlogin } from "appwrite-rn";

//import your logo
import GoogleLogo from "./assets/GoogleLogo.svg";

export default function demo() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    console.log("Output ", loggedIn);
  }, [loggedIn]);

  return (
    <View>
      <Oauthlogin
        provider="google"
        appwriteAccount={appwriteAccount}
        setLoggedIn={setLoggedIn}
        Logo={GoogleLogo}
        text="Google Login"
        style={{
          backgroundColor: "white",
          borderColor: colors.primary[500],
        }}
        // textStyle={{ color: "red" }}
      />
    </View>
  );
}
```
