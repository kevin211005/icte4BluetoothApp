# BluetoothApp  

## Goal
Developed the app to control Bluetooth low energy conneciton 
## Start

```bash 
##init project 
npx react-native init CameraApp  

##install package 
cd BluetoothApp  
##intall react-native-ble-manager
npm i --save react-native-ble-manager
##install react-native-permissions  
yarn add react-native-permissions
```

# Add permission of using location 
In AndroidManifest.xml add 
```
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.BLUETOOTH_SCAN"/> 
<uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
<uses-permission android:name="android.permission.BLUETOOTH_ADVERTISE" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
```
# Run

```
npx react-native run-android 
npx react-native start
```
# 


#Video Demo


# Upload to Github by github cli 

```
# create a remote repository from the current directory
gh repo create my-project --private --source=. --remote=upstream
git remote add origin https://github.com/kevin211005/my-project.git
git branch -M main
git push -u origin main
```

# Reference 
https://github.com/innoveit/react-native-ble-manager
# Demo Video 


https://user-images.githubusercontent.com/86145579/236355902-4fee9705-6c5f-43ed-b959-3dbb0cc4b929.mp4


# Log 
![Screenshot 2023-05-04 171441](https://user-images.githubusercontent.com/86145579/236355880-a501dc88-43e4-4603-a60b-7a39a948e455.png)
