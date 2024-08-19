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
        "达到1.79e308能源A<sub>0</sub>", "A<sub>1</sub>重置",
        "购买升级A<sub>1</sub>U(-2)", "解锁A<sub>1</sub>挑战",
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
}

function DisplayAchievement() {
    return `
<div class="massage">
    信息：${hover[0] == -1 ? "" : Table[hover[0]][hover[1]]}
    <br>
    获得成就00,01,02,03,05,07,12,15会解锁一个推荐
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
            <td ${achievement[1][5] ? "style='background: #00007f'" : ""} onmouseover="hover = [1, 5]">15<br><br>第一个重置层</td>
            <td ${achievement[1][6] ? "style='background: #00007f'" : ""} onmouseover="hover = [1, 6]">16<br><br>永久保留的升级</td>
            <td ${achievement[1][7] ? "style='background: #00007f'" : ""} onmouseover="hover = [1, 7]">17<br><br>1000小时后更新</td>
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
        achievement[1][2] ? "<a href='https://qqqe308.github.io/Anti-Anti-Softcap-Tree/111/'>反反软上限树</a><br>" : ""
    ) + (
        achievement[1][5] ? "<a href='https://goldenapple125.github.io/RBN/'>大数之路</a><br>" : ""
    )
}
