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

function Speed(n) {
    return lvA0n[n - 1].add(A0n[n - 1]).mul((new D(2)).pow(lvA0n[n - 1].sub(3.5).add(+A0U[1] / 2)))
}

function UpdateA0n() {
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
    每秒生产 ${display(lvA0n[n - 1].add(A0n[n - 1]))} × ${display((new D(2)).pow(lvA0n[n - 1].sub(3.5).add(+A0U[1] / 2)), false)} = ${display(Speed(n))} 个${n == 1 ? "能源" : "生产器"}A<sub>0</sub>${n == 1 ? "" : "<sup>" + (n - 1) + "</sup>"}
    <button onmousedown="BuyA0n(${n})">购买一个生产器A<sub>0</sub><sup>${n}</sup>，价格： ${display(Price(n), false)} 个能源A<sub>0</sub></button>
    ${DisplayBuyMaxA0n(n)}
</div>`
}

function DisplayBuyMaxA0n(n) {
    return A0U[0] ? `
<button class="A0${n}" onmousedown="BuyMaxA0n(${n})">
    购买最大
</button>` : ""
}

function DisplayA0() {
    return `
<div class="A0">
    你有 ${display(A0)} 个能源A<sub>0</sub>
    <br>
    你每秒获得 ${display(Speed(1))} 个能源A<sub>0</sub>
</div>`
}

function DisplayBuyMaxA0All() {
    return A0U[0] ? `
<button class="A0" onmousedown="BuyMaxA0All()">
    全部购买最大
</button>` : ""
}

function DisplayA0Un(n) {
    return `
<button class="A0U" ${A0U[n] ? "style='background: #ff3f3f'" : ""} ${A0U[n] ? "" : "onmousedown='BuyA0U(" + n +")'"}>
    A<sub>0</sub>U${n}：
    <br>
    ${["解锁购买最大<br>", "所有生产器×√2<br>", "购买生产器只需达到<br>并解锁A1"][n]}
    <br>
    花费： ${display((new D(2)).pow((new D(2)).pow(n + 7)))} 个能源A<sub>0</sub>
</button>`
}

function DisplayA01_8() {
    return `
${DisplayBuyMaxA0All()}
<br>
${DisplayA0n(1)}
<br>
${DisplayA0n(2)}
<br>
${DisplayA0n(3)}
<br>
${DisplayA0n(4)}
<br>
${DisplayA0n(5)}
<br>
${DisplayA0n(6)}
<br>
${DisplayA0n(7)}
<br>
${DisplayA0n(8)}
<br>
${DisplayA0Un(0)}
${DisplayA0Un(1)}
${DisplayA0Un(2)}`
}
