# appwrite-RN
Install the following packages
`yarn add appwrite expo-random expo-auth-session @react-native-cookies/cookies`

`import { Oauthlogin } from "appwrite-rn";`
```
#import your logo
import GoogleLogo from "./assets/GoogleLogo.svg";
```

```
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
```
