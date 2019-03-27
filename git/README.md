1、通过git  init命令把目录变成Git可以管理的仓库，如果你没有看到.git目录，那是因为这个目录默认是隐藏的，用ls  -ah命令就可以看见

2、用命令git  add告诉Git，把文件添加到仓库(实际上就是把文件修改添加到暂存区)
      git  add  文件名    提交单个文件
      git  add  .    提交全部

3、用命令git  commit告诉Git，把文件提交到仓库(实际上就是把暂存区的所有内容提交到当前分支)
      git  commit  -m  "wrote  a  readme  file"    -m后面输入的是本次提交的说明
      git  diff  HEAD  --  readme.txt命令可以查看工作区和版本库里面最新版本的区别

4、用git  log命令查看commit历史记录
      加上--pretty=oneline参数可过滤掉多余的信息  git  log  --pretty=oneline

5、用git  reset命令回退到指定版本
      git  reset  --hard  版本commit  id

6、git  reflog查看命令历史

7、git  status查看状态

8、git  checkout  --  file  丢弃工作区的修改
      
    这里有两种情况：
    一种是文件自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；
    一种是文件已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。
    总之，就是让这个文件回到最近一次git  commit或git  add时的状态。

9、用命令git  reset  HEAD  <file>(文件名)可以把暂存区的修改撤销掉，重新放回工作区

      版本回退说明：

      场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git  checkout  --  file。

      场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git  reset  HEAD  <file>，就回到了场景1，第二步按场景1操作。

      场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，用git  reset命令回退到指定版本

10、删除文件：  用  rm  文件名    命令删除文件,git  commit提交
        git  checkout  --  文件名  撤回删除

11、连接到远程库
        git  remote  add  远程仓名  远程仓链接

12、git fetch 相当于是从远程获取最新到本地，不会自动merge，如下指令：
 ```
 git fetch orgin master //将远程仓库的master分支下载到本地当前branch中
 git log -p master  ..origin/master //比较本地的master分支和origin/master分支的差别
git merge origin/master //进行合并
 ```

也可以用以下指令：
```
git fetch origin master:tmp //从远程仓库master分支获取最新，在本地建立tmp分支
git diff tmp //將當前分支和tmp進行對比
git merge tmp //合并tmp分支到当前分支
```
13、git pull：相当于是从远程获取最新版本并merge到本地
```
git pull origin master\

git pull 相当于从远程获取最新版本并merge到本地
在实际使用中，git fetch更安全一些
```

14、重仓库拉代码
默认的pull相当于git pull --merge 
git pull —rebase
一个是合并,一个是覆盖。

15、
切换分支
Git pull
Git checkout 分支名
// 提交正常提交就可以了

//合并 之前需要测试无问题
Git checkout master
Git merge origin/index-swiper //合并到本地master分支
Git push //最后提交