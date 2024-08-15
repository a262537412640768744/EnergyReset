let choose = 0

function display(value, a = true) {
    if (value.lt(1) && value.gt(0.0001)) {
        return (value.sign * value.mag).toFixed(2)
    }
    if (a) {
        value = value.floor()
    } else {
        value = value.round()
    }
    if (value.layer === 0) {
        if (value.mag < 1e9 && value.mag > 1e-4 || value.mag === 0) {
            return (value.sign * value.mag).toFixed(0)
        }
        return value.m.toFixed(2) + "e" + value.e
    } else if (value.layer === 1) {
        if (value.mag < 1e6) {
            return value.m.toFixed(2) + "e" + value.e
        }
        return "e" + display(value.log10())
    } else {
        return "e" + display(value.log10())
    }
}

let center0 = document.querySelectorAll('.center0').item(0)
let center1 = document.querySelectorAll('.center1').item(0)

function update() {
    UpdateA0n()
    UpdateAchievement()
    center0.innerHTML = DisplayA0()
    center1.innerHTML = [DisplayA01_8(), DisplayAchievement()][choose]
    setTimeout(update, 10)
}

update()