function game() {
    return {
        A0: {
            A0: A0,
            A0n: A0n,
            lvA0n: lvA0n,
            A0U: A0U
        }
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
        }
    }
}

load()
save()
