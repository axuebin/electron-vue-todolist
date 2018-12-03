# electron-vue-todolist

> An electron-vue project

#### 开发

```
1. git clone git@github.com:axuebin/electron-vue-todolist.git
2. npm run dev
```

开发模式和浏览器端没什么区别，相当于内嵌一个 WebKit 浏览器，开发的时候可以加入以下代码打开控制台：

```javascript
mainWindow.webContents.openDevTools({
  mode: 'detach',
});
```

#### 打包

使用 [electron-packager](https://github.com/electron-userland/electron-packager) 进行打包。

```
1. npm install electron-packager -g
2. electron-packager ./ todoList --out ./OutApp --overwrite
```

可以加到 package.json 里比较方便，直接 `npm run package` 即可。
