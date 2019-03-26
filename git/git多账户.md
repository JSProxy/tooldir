
#一台电脑多个git的账户

```.
生成两个密钥 回车后输入自定义命名
$ ssh-keygen -t rsa -C "one@gmail.com"
$ ssh-keygen -t rsa -C "two@gmail.com"

会在 .ssh文件夹下生成 两对密钥
id_rsa_one
id_rsa_two

```

添加私钥
```.
1.开启ssh-agent
$ ssh-agent -s
$ ssh-add -D 删除所以私钥
2.添加私钥
$ ssh-add ~/.ssh/id_rsa
$ ssh-add ~/.ssh/id_rsa_two
3.查看是否有
ssh-add -l
```

.ssh文件夹下创建config
```.
$ touch config

文件添加
Host one
HostName github.com
IdentityFile ~/.ssh/id_rsa
User git

Host two
HostName github.com
IdentityFile ~/.ssh/id_rsa_two
User git
```

```.
部署ssh
把 .ssh 中的pub 部署到相应git账号上

测试验证
$ ssh –T one
$ ssh –T two
```

```.
原来的写法
$ git clone git@github.com: one的用户名/learngit.git

$ git clone git@one: one的用户名/learngit.git
$ git clone git@two: two的用户名/learngit.git
```

```.
取消全局用户名和邮箱
git config --global --unset user.name
git config --global --unset user.email
设置局部用户名和邮箱
进入项目后
$ git config user.name "zf" ; git config user.email "13923734790@163.com"
$ git config user.name "zf" ; git config user.email "mailtype@163.com"
```

```.查看配置
git config --list
```

hexo
```hexo
deploy:
  type: git
  repository: git@one:love109/love109.github.io.git
  branch: master
```