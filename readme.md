## 功能

* 给less定义别名，在Less文件中能够以别名引用Less文件

## repository
[项目地址](https://github.com/rashuo/less-file-alias)

## 更新日志
* 2018/7/3
** 去掉console

## 使用方法

* webpack配置

```javascript
    {
      loader: 'less-loader',
      options: {
        modifyVars: themeVariables
      }
    }, {
    loader: 'less-file-alias',
    options: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    }
  }
```

* 代码使用

```javascript
@import '@/style/variables.less';
```
