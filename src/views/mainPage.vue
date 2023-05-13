<template>
    <div class="mainPage">
        <div class="shell">
          <router-link to="/list" class="box"><i class="iconfont icon-liebiao"></i><span>list</span></router-link>
          <router-link to="/mainPage/userHandle" class="box"><i class="iconfont icon-cangku"></i><span>用户信息</span></router-link>
          <router-link to="/mainPage/doctorHandle" class="box"><i class="iconfont icon-zhuti_tiaosepan"></i><span>医生信息</span></router-link>
          <router-link to="/mainPage/petHandle" class="box"><i class="iconfont icon-qianbao"></i><span>宠物信息</span></router-link>
          <!-- <router-link to="/picture" class="box"><i class="iconfont icon-tupian"></i><span>picture</span></router-link> -->
          <router-link to="/mainPage/erweima" class="box"><i class="iconfont icon-erweima"></i><span>QR code</span></router-link>
          <!-- <router-link to="/authentication" class="box"><i class="iconfont icon-dunpaibaoxianrenzheng"></i><span>authentication</span></router-link> -->
          <router-link to="/loginPage" class="box"><i class="iconfont icon-dengchu"></i><span>退出登录</span></router-link>
        </div>
        <div class="mainLeft">
            <router-view/>
        </div>
    </div>
</template>

<script>
import '@/assets/font_cqbiizu5og9/iconfont.css'

export default {
  name: 'mainPage'
}
</script>

<style lang="less" scoped>
.mainPage {
    display: flex;
    height: 100%;
    width: 100%;
    .mainLeft {
        flex: 0.93;
        margin-left: 50px;
        margin-top: 50px;
    }
}
.shell {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(242, 243, 244);
    // border-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: .3s;
    overflow: hidden;
}

.box {
    display: block;
    height: 15%;
    width: 85%;
    margin: 9px;
    border-radius: 5px;
    // border-top-right-radius: 5px;
    // border-bottom-right-radius: 5px;
    position: relative;
    transition: .3s;
    color: rgb(18, 24, 38);
}
.box i {
    font-size: 60px;
    position: absolute;
    margin: 7px 0 0 13px;
}

.box:nth-child(1)::before,
.box:nth-child(5)::before{
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: rgb(55, 65, 81);
    position: absolute;
    bottom: -10px;
}

.box span{
    position: relative;
    top: 22px;
    left: 80px;
    font: 500 20px '';
    opacity: 0;
    transition: .1s;
}
.shell:hover{
    width: 270px;
}
.box:hover{
    background-color: rgb(243, 167, 162);
}
.shell:hover span{
    opacity: 1;
}
.box:hover{
    color: #fff;
}

.shell:nth-child(2) {
    background-color: rgb(243, 244, 246);
}
.shell:nth-child(2) .box:hover{
    background-color: rgb(209, 213, 219);
    color: rgb(241, 159, 159);
}
.shell:nth-child(2) .box{
    color: #000;
}

.shell:nth-child(3) {
    background-color: rgb(49,46,129);
}
.shell:nth-child(3) .box:hover{
    background-color: rgb(67, 56, 202);
}
.shell:nth-child(3) .box{
    color: rgb(140, 120, 240);
}
</style>
