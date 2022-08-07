# Din

A Material UI inspired Quran Reader

![image](https://user-images.githubusercontent.com/71118951/183293892-aea43eef-9ed0-4c08-af93-b2648db416f1.png)


## Features

- [x] Simple surah navigation with Drawer + ViewPager layout

## Building

```sh
git clone ...

# build
yarn android
```

## Release and Signing

KeyGen :

```sh
 keytool -genkey -v -keystore release.keystore -alias release -keyalg RSA -keysize 2048 -validity 10000
```

Build release apk:

```sh
ns build android --release \
  --key-store-path ./release.keystore \
  --key-store-password <your-key-store-password> \
  --key-store-alias release \
  --key-store-alias-password <your-alias-password> \
  --copy-to ./din-release.apk
```

Build release aab:

```sh
ns build android --release \
  --key-store-path ./release.keystore \
  --key-store-password <your-key-store-password> \
  --key-store-alias release \
  --key-store-alias-password <your-alias-password> \
  --aab \
  --copy-to ./din-release.aab
```
