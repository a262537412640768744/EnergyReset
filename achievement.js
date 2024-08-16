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
        "购买升级A<sub>0</sub>U0", "达到1e100能源A<sub>0<sub>", 
        "购买所有A<sub>0</sub>升级", "购买4个生产器A<sub>0</sub><sup>8</sup>",
        "达到1.79e308能源A<sub>0<sub>", "A<sub>1</sub>重置",
        "购买生产器A<sub>1</sub><sup>8</sup>", "解锁A<sub>1</sub>挑战",
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
<div class="massage">信息：${hover[0] == -1 ? "" : Table[hover[0]][hover[1]]}</div>
<table>
    <tbody>
        <tr>
            <td ${achievement[0][0] ? "style='background: #0000bf'" : ""} onmouseover="hover = [0, 0]">一个开始</td>
            <td ${achievement[0][1] ? "style='background: #0000bf'" : ""} onmouseover="hover = [0, 1]">两个维度</td>
            <td ${achievement[0][2] ? "style='background: #0000bf'" : ""} onmouseover="hover = [0, 2]">三重生产器</td>
            <td ${achievement[0][3] ? "style='background: #0000bf'" : ""} onmouseover="hover = [0, 3]">肆式风灵</td>
            <td ${achievement[0][4] ? "style='background: #0000bf'" : ""} onmouseover="hover = [0, 4]">五号传输节点</td>
            <td ${achievement[0][5] ? "style='background: #0000bf'" : ""} onmouseover="hover = [0, 5]">主要的生产器（主=6）</td>
            <td ${achievement[0][6] ? "style='background: #0000bf'" : ""} onmouseover="hover = [0, 6]">第七维度</td>
            <td ${achievement[0][7] ? "style='background: #0000bf'" : ""} onmouseover="hover = [0, 7]">最后一个</td>
        </tr>
        <tr>
            <td ${achievement[1][0] ? "style='background: #0000bf'" : ""} onmouseover="hover = [1, 0]">开始暴涨</td>
            <td ${achievement[1][1] ? "style='background: #0000bf'" : ""} onmouseover="hover = [1, 1]">古戈尔能源</td>
            <td ${achievement[1][2] ? "style='background: #0000bf'" : ""} onmouseover="hover = [1, 2]">所有升级</td>
            <td ${achievement[1][3] ? "style='background: #0000bf'" : ""} onmouseover="hover = [1, 3]">第4+8个成就（从壹开始）</td>
            <td ${achievement[1][4] ? "style='background: #0000bf'" : ""} onmouseover="hover = [1, 4]">big crunch!</td>
            <td ${achievement[1][5] ? "style='background: #0000bf'" : ""} onmouseover="hover = [1, 5]">第一个重置层</td>
            <td ${achievement[1][6] ? "style='background: #0000bf'" : ""} onmouseover="hover = [1, 6]">2^2^2个生产器</td>
            <td ${achievement[1][7] ? "style='background: #0000bf'" : ""} onmouseover="hover = [1, 7]">5小时后更新挑战</td>
        </tr>
    </tbody>
</table>
`
}