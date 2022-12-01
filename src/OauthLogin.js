import React, { useContext, useEffect, useState } from "react";

import { useAuthRequest } from "expo-auth-session";
import CookieManager from "@react-native-cookies/cookies";
import {
  ActivityIndicator,
  Button,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";

export default function OauthLogin({
  appwriteAccount,
  provider,
  setLoggedIn,
  Logo,
  style,
  text,
  textStyle,
  disabled,
  succLogin,
}) {
  const [loading, setLoading] = useState(false);

  const redirectUri = `${appwriteAccount.createOAuth2Session(provider)}&`;

  const [request, response, promptAsync] = useAuthRequest(
    {
      redirectUri: `appwrite-callback-${appwriteAccount.client.config.project.toLowerCase()}://`,
      responseType: "token",
    },
    { authorizationEndpoint: redirectUri.toString() }
  );

  useEffect(() => {
    if (response?.params) {
      const { params } = response;
      // console.log(params);

      const setcookie = async () => {
        setLoading(true);
        await CookieManager.set(`https://${params.domain}`, {
          domain: params.domain,
          name: params.key.toLowerCase(),
          value: params.secret,
          path: "/",
          httpOnly: true,
          secure: true,
        }).then((done) => {
          // console.log("CookieManager.set =>", done);
        });
        await succLogin();
        setLoggedIn(true);
        setLoading(false);
      };
      setcookie();
    }
  }, [response]);
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        borderColor: "blue",
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
      onPress={async () => {
        setLoading(true);
        await promptAsync();
        setLoading(false);
      }}
      disabled={disabled}
    >
      {loading ? (
        <>
          <ActivityIndicator />
          <Text color="black" style={{ paddingLeft: Logo && 7 }} bold>
            PLEASE WAIT
          </Text>
        </>
      ) : (
        <>
          {Logo && <Logo />}
          <Text style={{ paddingLeft: Logo && 7, ...textStyle }} bold>
            {text}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}
