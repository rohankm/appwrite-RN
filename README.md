# appwrite-RN
`
import { Oauthlogin } from "appwrite-rn";
`
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
