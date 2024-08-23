let A0 = new D(2)
let A0n = [
    new D(0), new D(0), new D(0), new D(0),
    new D(0), new D(0), new D(0), new D(0)
]
let lvA0n = [
    new D(0), new D(0), new D(0), new D(0),
    new D(0), new D(0), new D(0), new D(0)
]
let A0U = [false, false, false]
let Auto = [
    false, false, false, false,
    false, false, false, false
]

function DisplayGetting(a, b, c) {
    if ((b.div(100).div(a).add(1)).pow(100).gte(10) && a.gte(1e10)) {
        return `你每秒获得 ${display((b.div(100).div(a).add(1)).pow(100).log10(), true, false)} 个数量级`
    } else {
        return `你每秒获得 ${display(b)} 个${c}`
    }
}

function Price(n) {
    return (new D(2)).pow((new D(2)).pow(n - 1).mul(lvA0n[n - 1].mul(2).add(1)))
}

function BuyA0n(n) {
    if (A0.gte(Price(n))) {
        A0 = A0.sub(Price(n))
        lvA0n[n - 1] = lvA0n[n - 1].add(1)
    }
}

function BuyMaxA0n(n) {
    let l = A0U[2] ? A0 : A0.add((new D(2)).
        pow((new D(2)).pow(n)).
        pow(lvA0n[n - 1]).
        sub(1).
        div((new D(2)).pow((new D(2)).pow(n)).sub(1)).
        mul((new D(2)).pow((new D(2)).pow(n - 1)))
    )
    let k = A0U[2] ? l.
        mul(
            (new D(2)).pow((new D(2)).pow(n - 1))
        ).
        log2().
        div((new D(2)).pow(n)).
        floor() : l.
        mul(
            ((new D(2)).pow((new D(2)).pow(n))).
            sub(1).
            div((new D(2)).pow((new D(2)).pow(n - 1)))
        ).
        add(1).
        log2().
        div((new D(2)).pow(n)).
        floor()
    lvA0n[n - 1] = k
    if (A0U[2]) {
        return
    }
    A0 = l.sub((new D(2)).
        pow((new D(2)).pow(n)).
        pow(k).
        sub(1).
        div((new D(2)).pow((new D(2)).pow(n)).sub(1)).
        mul((new D(2)).pow((new D(2)).pow(n - 1)))
    )
}

function BuyMaxA0All() {
    BuyMaxA0n(1)
    BuyMaxA0n(2)
    BuyMaxA0n(3)
    BuyMaxA0n(4)
    BuyMaxA0n(5)
    BuyMaxA0n(6)
    BuyMaxA0n(7)
    BuyMaxA0n(8)
}

function CollapseDiv() {
    return +A0.gte((new D(2)).pow(65536 * (Al[0].C[0] ? 1.75 : 1))) * (Al[0].currentC == 0 ? 12 : 8) / (Al[0].C[0] ? 2 : 1)
}

function A0mutiplyer(n) {
    return (new D(2)).pow(lvA0n[n - 1].sub(3.5).sub(CollapseDiv()).add(+A0U[1] / 2)).mul(Alspeedup(1))
}

function Speed(n) {
    return lvA0n[n - 1].add(A0n[n - 1]).mul(A0mutiplyer(n))
}

function UpdateA0n() {
    for (let n = 1; n <= 8; n++) {
        if (Al[0].U[1] && Auto[n - 1]) {
            BuyMaxA0n(n)
        }
    }
    A0 = A0.add(Speed(1).mul(0.01))
    for (let n = 1; n < 8; n++) {
        A0n[n - 1] = A0n[n - 1].add(Speed(n + 1).mul(0.01))
    }
}

function BuyA0U(n) {
    let price = (new D(2)).pow((new D(2)).pow(n + 7))
    if (A0.gte(price)) {
        A0 = A0.sub(price)
        A0U[n] = true
    }
}

function DisplayA0n(n) {
    return `
<div class="A0${n}">
    你有 ${display(lvA0n[n - 1], false)} + ${display(A0n[n - 1])} = ${display(lvA0n[n - 1].add(A0n[n - 1]))} 个生产器A<sub>0</sub><sup>${n}</sup>，
    每秒生产 ${display(lvA0n[n - 1].add(A0n[n - 1]))} × ${display(A0mutiplyer(n), false)} = ${display(Speed(n))} 个${n == 1 ? "能源" : "生产器"}A<sub>0</sub>${n == 1 ? "" : "<sup>" + (n - 1) + "</sup>"}
    <button onmousedown="BuyA0n(${n})">购买一个生产器A<sub>0</sub><sup>${n}</sup>，价格： ${display(Price(n), false)} 个能源A<sub>0</sub></button>
    ${DisplayBuyMaxA0n(n)}
    ${DisplayBuyMaxA0nAuto(n)}
</div>`
}

function DisplayBuyMaxA0n(n) {
    return A0U[0] ? `
<button onmousedown="BuyMaxA0n(${n})">
    购买最大
</button>` : ""
}

function DisplayBuyMaxA0nAuto(n) {
    return Al[0].U[1] ? `
<button onmousedown="Auto[${n - 1}] = !Auto[${n - 1}]">
    自动：${Auto[n - 1] ? "是" : "否"}
</button>` : ""
}

function DisplayA0() {
    return `
<div class="A0">
    你有 ${display(A0)} 个能源A<sub>0</sub>
    <br>
    ${DisplayGetting(A0, Speed(1), "能源A<sub>0</sub>")}
    ${DisplayA0Collapse()}
</div>`
}

function DisplayBuyMaxA0All() {
    return A0U[0] ? `
<button class="A0" onmousedown="BuyMaxA0All()">
    全部购买最大
</button>` : ""
}

function DisplayA0Collapse() {
    return A0.gte((new D(2)).pow(65536 * (Al[0].C[0] ? 1.75 : 1))) ? `
<br>
超过${Al[0].C[0] ? "3.37e34524" : "2.00e19728"}后，A<sub>0</sub>宇宙将坍塌，使A<sub>0</sub><sup>1~8</sup>生产器÷
${display((new D(2)).pow(CollapseDiv()).pow(Al[0].currentC == 0 ? 1.5 : 1), false)}` : ""
}

function DisplayA0Un(n) {
    return `
<button class="A0U" ${A0U[n] ? "style='background: #ff3f3f'" : ""} ${A0U[n] ? "" : "onmousedown='BuyA0U(" + n +")'"}>
    A<sub>0</sub>U${n}：
    <br>
    ${["解锁购买最大", "所有生产器×√2", "购买生产器只需达到"][n]}
    <br>
    花费： ${display((new D(2)).pow((new D(2)).pow(n + 7)))} 个能源A<sub>0</sub>
</button>`
}

function DisplayA01_8() {
    return `
${DisplayBuyMaxA0All()}
<br>
${DisplayA0n(1)}
${DisplayA0n(2)}
${DisplayA0n(3)}
${DisplayA0n(4)}
${DisplayA0n(5)}
${DisplayA0n(6)}
${DisplayA0n(7)}
${DisplayA0n(8)}
<br>
${DisplayA0Un(0)}
${DisplayA0Un(1)}
${DisplayA0Un(2)}`
}
