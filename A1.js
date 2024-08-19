let Al = [
    {
        A: new D(0),
        B: new D(0),
        An: [
            new D(0), new D(0), new D(0), new D(0),
            new D(0), new D(0), new D(0), new D(0)
        ],
        lvn: [
            new D(0), new D(0), new D(0), new D(0),
            new D(0), new D(0), new D(0), new D(0)
        ],
        U: [false, false, false, false, false],
        C: [false, false, false]
    }
]

function Algain(l) {
    let A = l == 1 ? A0 : Al[l - 2].A
    let g = A.root(1024).div((new D(2)).pow(l))
    return g.lt(2) ? new D(0) : g.floor()
}

function AlReset(l) {
    if (Algain(l).lt(1)) {
        return
    }
    if (l == 1) {
        Al[0].A = Al[0].A.add(Algain(1))
        A0 = new D(2)
        A0n = [
            new D(0), new D(0), new D(0), new D(0),
            new D(0), new D(0), new D(0), new D(0)
        ]
        lvA0n = [
            new D(0), new D(0), new D(0), new D(0),
            new D(0), new D(0), new D(0), new D(0)
        ]
        A0U = [false, false, false]
        achievement[1][5] = true
    }
}

function Pricel(l, n) {
    return (new D(2)).pow((new D(2)).pow(n - 1).mul(Al[l - 1].lvn[n - 1].mul(2).add(1)))
}

function BuyAln(l, n) {
    if (Al[l - 1].A.gte(Price(n))) {
        Al[l - 1].A = Al[l - 1].A.sub(Price(n))
        Al[l - 1].lvn[n - 1] = Al[l - 1].lvn[n - 1].add(1)
    }
}

function Speedl(l, n) {
    return Al[l - 1].lvn[n - 1].add(Al[l - 1].An[n - 1]).mul((new D(2)).pow(Al[l - 1].lvn[n - 1].sub(3.5).add(+Al[l - 1].U[3] / 2)))
}

function UpdateAln(l) {
    Al[l - 1].B = Al[l - 1].B.add(Speedl(l, 1).mul(0.01))
    for (let n = 1; n < 8; n++) {
        Al[l - 1].An[n - 1] = Al[l - 1].An[n - 1].add(Speedl(l, n + 1).mul(0.01))
    }
}

function DisplayAln(l, n) {
    return `
<div class="A0${n}">
    你有 ${display(Al[l - 1].lvn[n - 1], false)} + ${display(Al[l - 1].An[n - 1])} = ${display(Al[l - 1].lvn[n - 1].add(Al[l - 1].An[n - 1]))} 个生产器A<sub>${l}</sub><sup>${n}</sup>，
    每秒生产 ${display(Al[l - 1].lvn[n - 1].add(Al[l - 1].An[n - 1]))} × ${display((new D(2)).pow(Al[l - 1].lvn[n - 1].sub(3.5).add(+Al[l - 1].U[3] / 2)), false)} = ${display(Speedl(l, n))} 个${n == 1 ? "能源" : "生产器"}${n == 1 ? "B" : "A"}<sub>${l}</sub>${n == 1 ? "" : "<sup>" + (n - 1) + "</sup>"}
    <button onmousedown="BuyAln(${l}, ${n})">购买一个生产器A<sub>${l}</sub><sup>${n}</sup>，价格： ${display(Pricel(l, n), false)} 个能源A<sub>${l}</sub></button>
</div>`
}

function DisplayAl(l) {
    return `
<div class="A0">
    你有 ${display(Al[l - 1].A)} 个能源A<sub>${l}</sub>，${display(Al[l - 1].B)} 个能源B<sub>${l}</sub>
    <br>
    你的B<sub>${l}</sub>使A<sub>0</sub><sup>1~8</sup>×${display(Al[l - 1].B.div(16).add(1).pow((new D(8)).pow(l - 1)), true, false)}
    <br>
    你每秒获得 ${display(Speedl(l, 1))} 个能源B<sub>${l}</sub>
</div>`
}

function DisplayAlReset(l) {
    return `
<button class="R" onmousedown="AlReset(${l})">
    ${
        Algain(l).lt(1) ?
        "重置要求： " + display((new D(2)).pow(1024).pow(l + 1)) + " 能源A<sub>" + (l - 1) + "</sub>"
        :
        "重置获得 " + display(Algain(l)) + " 能源A<sub>" + l + "</sub>" +
        (Algain(l).lt(100) ? ("，下一个在" + display((new D(2)).pow(1024).pow(l).mul((Algain(l).add(1).pow(1024))))) : "")
    }
</button>
`
}

function DisplayAl1_8(l) {
    return `
${DisplayAl(l)}
${DisplayAlReset(l)}
<br>
<br>
${DisplayAln(l, 1)}
${DisplayAln(l, 2)}
${DisplayAln(l, 3)}
${DisplayAln(l, 4)}
${DisplayAln(l, 5)}
${DisplayAln(l, 6)}
${DisplayAln(l, 7)}
${DisplayAln(l, 8)}`
}
