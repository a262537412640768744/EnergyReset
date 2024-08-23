function game() {
    return {
        achievement: achievement,
        A0: {
            A0: A0,
            A0n: A0n,
            lvA0n: lvA0n,
            A0U: A0U,
            Auto: Auto
        },
        Al: Al
    }
}

function save() {
    localStorage.setItem("EnergyReset", JSON.stringify(game()))
    setTimeout(save, 10)
}

function transformToDecimal(object) {
    for (i in object) {
        if (typeof (object[i]) == "string" && !isNaN(new Decimal(object[i]).mag)) {
            object[i] = new Decimal(object[i])
        }
        if (typeof (object[i]) == "object" && !isNaN(new Decimal(object[i]).mag)) {
            transformToDecimal(object[i])
        }
    }
}

function load() {
    let game_ = JSON.parse(localStorage.getItem("EnergyReset"))
    transformToDecimal(game_)
    if (game_) {
        if(game_.achievement) {
            achievement = game_.achievement
        }
        if (game_.A0) {
            if (game_.A0.A0) {
                A0 = game_.A0.A0
            }
            if (game_.A0.A0n) {
                A0n = game_.A0.A0n
            }
            if (game_.A0.lvA0n) {
                lvA0n = game_.A0.lvA0n
            }
            if (game_.A0.A0U) {
                A0U = game_.A0.A0U
            }
            if (game_.A0.Auto) {
                Auto = game_.A0.Auto
            }
        }
        if (game_.Al) {
            Al = game_.Al
        }
    }
}

load()
save()

function HardReset() {
    achievement = [
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
    ]
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
    Auto = [
        false, false, false, false,
        false, false, false, false
    ]
    Al = [
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
            C: [false, false, false],
            currentC: -1
        }
    ]
}

function trueHardReset() {
    if (!confirm("确定吗？")) {
        return
    }
    if (!confirm("确定吗？")) {
        return
    }
    if (!confirm("确定吗？")) {
        return
    }
    if (!confirm("确定吗？")) {
        return
    }
    if (!confirm("确定吗？")) {
        return
    }
    if (!confirm("确定吗？")) {
        return
    }
    if (!confirm("确定吗？")) {
        return
    }
    if (!confirm("确定吗？")) {
        return
    }
    HardReset()
}
