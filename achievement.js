let achievement = [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
]
const Table = [
    [
        "购买生产器A<sub>0</sub><sup>1</sup>", "购买生产器A<sub>0</sub><sup>2</sup>",
        "购买生产器A<sub>0</sub><sup>3</sup>", "购买生产器A<sub>0</sub><sup>4</sup>",
        "购买生产器A<sub>0</sub><sup>5</sup>", "购买生产器A<sub>0</sub><sup>6</sup>",
        "购买生产器A<sub>0</sub><sup>7</sup>", "购买生产器A<sub>0</sub><sup>8</sup>",
    ],
    [
        "购买升级A<sub>0</sub>U0", "达到1e100能源A<sub>0</sub>", 
        "购买所有A<sub>0</sub>升级", "购买4个生产器A<sub>0</sub><sup>8</sup>",
        "达到1.79e308能源A<sub>0</sub>", "达到1e500能源A<sub>0</sub>",
        "A<sub>1</sub>重置", "解锁A<sub>1</sub>挑战",
    ],
    [
        "A<sub>0</sub>&gt;1e10时每秒获得50个数量级", "一次重置获得1000个A<sub>1</sub>", 
        "购买200个生产器A<sub>0</sub><sup>8</sup>", "通过挑战A<sub>1</sub>C0且能源A<sub>0</sub>>2^<del>114514</del>114688",
        "购买前三个A<sub>1</sub>升级", "解锁A<sub>2</sub>",
        "A<sub>2</sub>重置", "达到e100000000能源A<sub>0</sub>",
    ]
]
let hover = [-1, 0]

function UpdateAchievement() {
    if (lvA0n[0].gte(1)) {
        achievement[0][0] = true
    }
    if (lvA0n[1].gte(1)) {
        achievement[0][1] = true
    }
    if (lvA0n[2].gte(1)) {
        achievement[0][2] = true
    }
    if (lvA0n[3].gte(1)) {
        achievement[0][3] = true
    }
    if (lvA0n[4].gte(1)) {
        achievement[0][4] = true
    }
    if (lvA0n[5].gte(1)) {
        achievement[0][5] = true
    }
    if (lvA0n[6].gte(1)) {
        achievement[0][6] = true
    }
    if (lvA0n[7].gte(1)) {
        achievement[0][7] = true
    }
    if (A0U[0]) {
        achievement[1][0] = true
    }
    if (A0.gte(1e100)) {
        achievement[1][1] = true
    }
    if (A0U[0] && A0U[1] && A0U[2]) {
        achievement[1][2] = true
    }
    if (lvA0n[7].gte(4)) {
        achievement[1][3] = true
    }
    if (A0.gte((new D(2)).pow(1024))) {
        achievement[1][4] = true
    }
    if (A0.gte(new D("1e500"))) {
        achievement[1][5] = true
    }
    if (Al[0].U[1]) {
        achievement[1][7] = true
    }
    if (A0.gte(1e10) && (Speed(1).div(100).div(A0).add(1)).pow(100).log10().gte(50)) {
        achievement[2][0] = true
    }
    if (lvA0n[7].gte(200)) {
        achievement[2][2] = true
    }
    if (Al[0].C[0] && A0.gte((new D(2)).pow(114688))) {
        achievement[2][3] = true
    }
    if (Al[0].U[0] && Al[0].U[1] && Al[0].U[2]) {
        achievement[2][4] = true
    }
    if (Al[0].U[4]) {
        achievement[2][5] = true
    }
    if (A0.gte(new D("1e100000000"))) {
        achievement[2][7] = true
    }
}

function DisplayAchievement() {
    return `
<div class="massage">
    信息：${hover[0] == -1 ? "" : Table[hover[0]][hover[1]]}
    <br>
    获得成就00,01,02,03,05,07,12,15,20,24会解锁一个推荐
</div>
<table>
    <tbody>
        <tr>
            <td ${achievement[0][0] ? "style='background: #00007f'" : ""} onmouseover="hover = [0, 0]">00<br><br>一个开始</td>
            <td ${achievement[0][1] ? "style='background: #00007f'" : ""} onmouseover="hover = [0, 1]">01<br><br>两个维度</td>
            <td ${achievement[0][2] ? "style='background: #00007f'" : ""} onmouseover="hover = [0, 2]">02<br><br>三重生产器</td>
            <td ${achievement[0][3] ? "style='background: #00007f'" : ""} onmouseover="hover = [0, 3]">03<br><br>肆式风灵</td>
            <td ${achievement[0][4] ? "style='background: #00007f'" : ""} onmouseover="hover = [0, 4]">04<br><br>五号传输节点</td>
            <td ${achievement[0][5] ? "style='background: #00007f'" : ""} onmouseover="hover = [0, 5]">05<br><br>主要的生产器</td>
            <td ${achievement[0][6] ? "style='background: #00007f'" : ""} onmouseover="hover = [0, 6]">06<br><br>第七维度</td>
            <td ${achievement[0][7] ? "style='background: #00007f'" : ""} onmouseover="hover = [0, 7]">07<br><br>最后一个</td>
        </tr>
        <tr>
            <td ${achievement[1][0] ? "style='background: #00007f'" : ""} onmouseover="hover = [1, 0]">10<br><br>开始暴涨</td>
            <td ${achievement[1][1] ? "style='background: #00007f'" : ""} onmouseover="hover = [1, 1]">11<br><br>古戈尔能源</td>
            <td ${achievement[1][2] ? "style='background: #00007f'" : ""} onmouseover="hover = [1, 2]">12<br><br>所有升级</td>
            <td ${achievement[1][3] ? "style='background: #00007f'" : ""} onmouseover="hover = [1, 3]">13<br><br>炸弹！</td>
            <td ${achievement[1][4] ? "style='background: #00007f'" : ""} onmouseover="hover = [1, 4]">14<br><br>big crunch!</td>
            <td ${achievement[1][5] ? "style='background: #00007f'" : ""} onmouseover="hover = [1, 5]">15<br><br>古戈尔^5小时</td>
            <td ${achievement[1][6] ? "style='background: #00007f'" : ""} onmouseover="hover = [1, 6]">16<br><br>重新开始</td>
            <td ${achievement[1][7] ? "style='background: #00007f'" : ""} onmouseover="hover = [1, 7]">17<br><br>1000小时后更新</td>
        </tr>
        <tr>
            <td ${achievement[2][0] ? "style='background: #00007f'" : ""} onmouseover="hover = [2, 0]">20<br><br>真正的暴涨</td>
            <td ${achievement[2][1] ? "style='background: #00007f'" : ""} onmouseover="hover = [2, 1]">21<br><br>一千新能源</td>
            <td ${achievement[2][2] ? "style='background: #00007f'" : ""} onmouseover="hover = [2, 2]">22<br><br>两百A08</td>
            <td ${achievement[2][3] ? "style='background: #00007f'" : ""} onmouseover="hover = [2, 3]">23<br><br>还是坍塌了，六</td>
            <td ${achievement[2][4] ? "style='background: #00007f'" : ""} onmouseover="hover = [2, 4]">24<br><br>风雨无阻</td>
            <td ${achievement[2][5] ? "style='background: #00007f'" : ""} onmouseover="hover = [2, 5]">25<br><br>不许催更！</td>
            <td ${achievement[2][6] ? "style='background: #00007f'" : ""} onmouseover="hover = [2, 6]">26<br><br>再次重新开始</td>
            <td ${achievement[2][7] ? "style='background: #00007f'" : ""} onmouseover="hover = [2, 7]">27<br><br>能源大亨</td>
        </tr>
    </tbody>
</table>
<button class="HR" onmousedown="trueHardReset()">硬重置</button>
<br>
<div class="tuijian">
    <a href="changelog.html">更新日志</a>
    <br>
    <br>
    推荐：
    <br>
    ${recommendation()}
</div>`
}

function recommendation() {
    return (
        achievement[0][0] ? "<a href='https://0i00000000a7.github.io/points-incremental-rewritten/'>点数增量重置版</a><br>" : ""
    ) + (
        achievement[0][1] ? "<a href='https://dlsdl.github.io/wind_spirit_creation/'>风灵作成</a><br>" : ""
    ) + (
        achievement[0][2] ? "<a href='https://seanxlx2011.github.io/'>数据增量重置版</a><br>" : ""
    ) + (
        achievement[0][3] ? "<a href='https://veryrrdefine.github.io/hyper-volume-incremental-v1/'>多维体积增量</a><br>" : ""
    ) + (
        achievement[0][5] ? "<a href='https://qqqe308.github.io/The-Rhythm-Game-Tree/'>音乐游戏树</a><br>" : ""
    ) + (
        achievement[0][7] ? "<a href='https://hypcos.github.io/too-many-layers/'>太多层级</a><br>" : ""
    ) + (
        achievement[1][2] ? "<a href='https://rg3072.github.io/anti-softcap-tree/111/'>反软上限树</a><br>" : ""
    ) + (
        achievement[1][5] ? "<a href='https://goldenapple125.github.io/RBN/'>大数之路</a><br>" : ""
    ) + (
        achievement[2][0] ? "<a href='https://aster131072.github.io/incremental_evolution/'>增量进化</a><br>" : ""
    ) + (
        achievement[2][4] ? "<a href='https://zlyxj.github.io/incremental-temperature/'>温度增量</a><br>" : ""
    )
}
