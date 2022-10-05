const people = [
    {
        "name": "Jaspal ",
        "age": "55"
    },
    {
        "name": "Maliha  ",
        "age": "38"
    },
    {
        "name": "Wardle ",
        "age": "42"
    },
    {
        "name": "Hutton ",
        "age": "21"
    },
    {
        "name": "Mica  ",
        "age": "55"
    },
    {
        "name": "Nguyen ",
        "age": "42"
    },
    {
        "name": "Britany  ",
        "age": "65"
    },
    {
        "name": "Fuentes ",
        "age": "25"
    },
    {
        "name": "Eddie  ",
        "age": "39"
    },
    {
        "name": "Fernandez ",
        "age": "55"
    },
    {
        "name": "Hussain ",
        "age": "33"
    },
    {
        "name": "Shiv  ",
        "age": "55"
    },
    {
        "name": "Richards ",
        "age": "44"
    },
    {
        "name": "O'Quinn ",
        "age": "31"
    },
    {
        "name": "Fuentes ",
        "age": "25"
    },
    {
        "name": "Richards ",
        "age": "44"
    },
    {
        "name": "O'Quinn ",
        "age": "31"
    },
    {
        "name": "Fuentes ",
        "age": "25"
    },
    {
        "name": "Richards ",
        "age": "44"
    },
    {
        "name": "O'Quinn ",
        "age": "31"
    },
    {
        "name": "Fuentes ",
        "age": "25"
    },
]

const tbody = document.getElementById('tbody');
const currentPageEl = document.getElementById('current-page');

currentPageEl.innerHTML = 1

const limit = 10;

const length = people.length

const qttDivs = Math.round(length / limit) + 1


for (let i = 0; i < qttDivs; i++) {
    const div = document.createElement('div')

    div.id = `pagination-${i + 1}`
    div.classList.add('pagination')

    if (i > 0) div.style.display = 'none'
    else div.style.display = 'contents'

    const newArray = people.splice(0, 10)

    newArray.forEach(person => {
        const tr = document.createElement('tr')

        const name = document.createElement('td')
        const age = document.createElement('td')

        name.innerHTML = person.name
        age.innerHTML = person.age

        tr.appendChild(name)
        tr.appendChild(age)

        div.appendChild(tr)

        tbody.appendChild(div)
    })
}

function nextPage() {
    let currentPage = Number(currentPageEl.textContent)

    let nextPage = currentPage + 1

    const divs = document.getElementsByClassName('pagination')

    for (let i = 0; i < divs.length; i++) {
        if (nextPage <= divs.length) {
            if (divs[i].id == `pagination-${nextPage}`) {
                document.getElementById(divs[i].id).style.display = 'contents'
                currentPage++
                currentPageEl.innerHTML = currentPage
            } else {
                document.getElementById(divs[i].id).style.display = 'none'
            }
        }
    }
}

function backPage() {
    let currentPage = Number(currentPageEl.textContent)

    let backPage = currentPage - 1

    const divs = document.getElementsByClassName('pagination')

    for (let i = 0; i < divs.length; i++) {
        if (backPage != 0) {
            if (divs[i].id == `pagination-${backPage}`) {
                document.getElementById(divs[i].id).style.display = 'contents'
                currentPage--
                currentPageEl.innerHTML = currentPage
            } else {
                document.getElementById(divs[i].id).style.display = 'none'
            }
        }
    }
}   